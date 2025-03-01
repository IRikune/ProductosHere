import { z } from "zod"

import { idSchema, productIDSchema } from "./common.ts"

export const serieSchema = z.object({
  id: idSchema,
  name: z.string(),
  date: z.number(),
  products: productIDSchema.array(),
})

export const getSerieSchema = z.object({
  id: idSchema,
})

export const postSerieSchema = serieSchema.extend({
  id: z.never(),
})

export const putSerieSchema = z.object({
  id: idSchema,
  serie: serieSchema,
})

export const deleteSerieSchema = z.object({
  id: idSchema,
})
