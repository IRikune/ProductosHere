import { z } from "zod"
import { idSchema } from "./common.ts"

export const orderSchema = z.object({
  id: idSchema,
  series: z.string(),
  createdAt: z.number(),
  expectedDate: z.number(),
  expectedProducts: idSchema.array(),
  expectedAmount: z.number().positive(),
  deliveredDate: z.number().optional(),
  deliveredProducts: idSchema.array().optional(),
  deliveredAmount: z.number().positive().optional(),
  status: z.enum(["pending", "delivered", "cancelled"]),
})
