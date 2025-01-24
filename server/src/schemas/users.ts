import { z } from "zod"

export const idSchema = z.string().ulid()

const productSchema = z.object({
  id: z.string(),
  producer: z.string(),
  name: z.string(),
  category: z.string(),
  aproxPrice: z.number(),
})

const contractSchema = z.object({
  id: z.string(),
  details: z.string(),
  amount: z.number(),
  status: z.string(),
})
