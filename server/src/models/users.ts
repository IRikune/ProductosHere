import { kv } from "../../mod.ts"
import type { User } from "../types/mod.ts"

interface GetManyUsersOptions {
  prefix?: string
}
interface UpdateUsersOptions {
  userID: User["id"]
  userEmail: User["email"]
  newUser: User
}

export async function getAllUsers({ prefix = "" }: GetManyUsersOptions) {
  const primaryKey = [...prefix]
  const entries = kv.list<User>({ prefix: primaryKey })
  const users: User[] = []
  for await (const entry of entries) {
    const user = entry.value
    users.push(user)
  }
  if (!users.length) throw new TypeError("No users registered")
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
  if (!res.ok) {
    throw new TypeError("User with ID or email already exists")
  }
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
  { userEmail, userID, newUser }: UpdateUsersOptions,
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
export async function deleteUser(user: User) {
  const primaryKey = ["user", user.id]
  const byEmailKey = ["user", "email", user.id]
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
