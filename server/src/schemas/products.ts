import { z } from "zod"
import { productIDSchema } from "./common.ts"

export const productSchema = z.object({
  id: productIDSchema,
  producer: z.string(),
  name: z.string(),
  categories: z.string().array(),
  description: z.string(),
  price: z.number().positive(),
})
