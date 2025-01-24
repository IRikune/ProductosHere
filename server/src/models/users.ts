import { kv } from "../../mod.ts"
import type { User } from "../types/mod.ts"

interface GetManyUsersOptions {
  prefix?: string
}
interface UpdateUserOptions {
  userID: User["id"]
  userEmail: User["email"]
  newUser: User
}
interface DeleteUserOptions {
  userID: User["id"]
  userEmail: User["email"]
}
interface KvUsersResult {
  ok: boolean
  data?: User | User[]
}
type KvUsersResultMaybe = Promise<KvUsersResult>

export async function getAllUsers(
  { prefix = "" }: GetManyUsersOptions,
): KvUsersResultMaybe {
  const primaryKey = [...prefix]
  const entries = kv.list<User>({ prefix: primaryKey })
  const users: User[] = []
  for await (const entry of entries) {
    const user = entry.value
    users.push(user)
  }
  const res = { ok: true, data: users }
  return res
}

export async function createUser(user: User) {
  const primaryKey = ["users", user.id]
  const byEmailKey = ["users", "email", user.email]
  const res = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    .check({ key: byEmailKey, versionstamp: null })
    .set(primaryKey, user)
    .set(byEmailKey, user)
    .commit()
  return res
}

export async function getUser(userID: User["id"]) {
  const primaryKey = ["users", userID]
  const res = await kv.get<User>(primaryKey)
  if (!res.versionstamp) {
    throw new TypeError("User not registered")
  }
  return res.value
}

export async function updateUser(
  { userEmail, userID, newUser }: UpdateUserOptions,
) {
  const primaryKey = ["user", userID]
  const byEmailKey = ["user", "email", userEmail]
  const res = await kv.atomic()
    .set(primaryKey, newUser)
    .set(byEmailKey, newUser)
    .commit()
  if (!res.ok) {
    throw new TypeError("User with ID or email not in exists")
  }
}
export async function deleteUser({ userID, userEmail }: DeleteUserOptions) {
  const primaryKey = ["user", userID]
  const byEmailKey = ["user", "email", userEmail]
  const res = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    .check({ key: byEmailKey, versionstamp: null })
    .delete(primaryKey)
    .delete(byEmailKey)
    .commit()
  if (!res.ok) {
    throw new TypeError("User with ID or email not in exists")
  }
}
