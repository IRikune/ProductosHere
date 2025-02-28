import { z } from "zod"
import { idSchema } from "./common.ts"

export const productSchema = z.object({
  id: idSchema,
  producer: z.string(),
  name: z.string(),
  category: z.string(),
  aproxPrice: z.number().positive(),
})
