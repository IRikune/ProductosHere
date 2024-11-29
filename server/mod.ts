import { Hono } from "hono"

const app = new Hono()
export const kv = await Deno.openKv()

app.get("/", (c) => {
  return c.text("Hello Hono!")
})

Deno.serve(app.fetch)
