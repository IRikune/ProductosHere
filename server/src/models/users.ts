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

export async function getManyUsers(
  { prefix = "" }: GetManyUsersOptions,
): KvUsersResultMaybe {
  const primaryKey = [...prefix]
  const entries = kv.list<User>({ prefix: primaryKey })
  const users: User[] = []
  for await (const entry of entries) {
    const user = entry.value
    users.push(user)
  }
  const res: KvUsersResult = { ok: true, data: users }
  return res
}

export async function createUser(user: User): KvUsersResultMaybe {
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

export async function getUser(userID: User["id"]): KvUsersResultMaybe {
  const primaryKey = ["users", userID]
  const entry = await kv.get<User>(primaryKey)
  const user = entry.value
  const response: KvUsersResult = { ok: true, data: user || [] }
  return response
}

export async function updateUser(
  { userEmail, userID, newUser }: UpdateUserOptions,
): KvUsersResultMaybe {
  const primaryKey = ["user", userID]
  const byEmailKey = ["user", "email", userEmail]
  const res: KvUsersResult = await kv.atomic()
    .set(primaryKey, newUser)
    .set(byEmailKey, newUser)
    .commit()
  return res
}
export async function deleteUser(
  { userID, userEmail }: DeleteUserOptions,
): KvUsersResultMaybe {
  const primaryKey = ["user", userID]
  const byEmailKey = ["user", "email", userEmail]
  const res: KvUsersResult = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    .check({ key: byEmailKey, versionstamp: null })
    .delete(primaryKey)
    .delete(byEmailKey)
    .commit()
  return res
}
