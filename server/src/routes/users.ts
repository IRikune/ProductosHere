import { Hono } from "hono"
import { validator } from "hono/validator"
import { HTTPException } from "hono/http-exception"
import { getManyUsers, getUser } from "../models/users.ts"
import { idSchema } from "../schemas/users.ts"

export const users = new Hono()

users.get("/", async (c) => {
  const users = await getManyUsers({})
  const res = {
    ok: true,
    response: users,
  }
  return c.json(res)
})

users.get(
  "/:id",
  validator("param", (value, _c) => {
    const parsed = idSchema.safeParse(value.id)
    if (!parsed.success) {
      throw new HTTPException(400, { message: "Invalid userID" })
    }
    const response = { id: parsed.data }
    return response
  }),
  async (c) => {
    const { id } = c.req.valid("param")
    const user = await getUser(id)
    return c.json(user)
  },
)
