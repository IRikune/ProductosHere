import { z } from "zod"
import { productIDSchema } from "./common.ts"

export const productSchema = z.object({
  id: productIDSchema,
  code: z.number(),
  producer: z.string(),
  name: z.string(),
  categories: z.string().array(),
  description: z.string(),
  price: z.number().positive(),
}).strict()

export const postProductSchema = productSchema.extend({
  id: z.never(),
})

export const putProductSchema = z.object({
  id: productIDSchema,
  product: productSchema,
})
