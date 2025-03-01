import { z } from "zod"
import { serieSchema } from "./series.ts"
import { idSchema, productIDSchema } from "./common.ts"

export const discountSchema = z.object({
  forProducts: idSchema.array(),
  discount: z.number().positive(),
})

export const orderSchema = z.object({
  id: idSchema,
  serie: serieSchema,
  createdAt: z.number(),
  expectedDate: z.number(),
  expectedProducts: productIDSchema.array(),
  expectedAmount: z.number().positive(),
  deliveredDate: z.number().optional(),
  deliveredProducts: productIDSchema.array().optional(),
  deliveredAmount: z.number().positive().optional(),
  discounts: discountSchema.array(),
  status: z.enum(["pending", "delivered", "cancelled"]),
})
