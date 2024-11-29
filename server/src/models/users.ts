import { kv } from "../../mod.ts"
import type { User } from "../types/mod.ts"

export async function getAllUsers() {
  const primaryKey = [""]
  const entries = kv.list({ prefix: primaryKey })
  const users = []
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
  const user = res.value
  return user
}

export async function updateUser(user: User) {
  const primaryKey = ["user", user.id]
  const byEmailKey = ["user", "email", user.email]
  const res = await kv.atomic()
    .set(primaryKey, user)
    .set(byEmailKey, user)
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
