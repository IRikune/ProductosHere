import { z } from "zod"
import { idSchema } from "./common.ts"

export const contractSchema = z.object({
  id: idSchema,
  details: z.string(),
  amount: z.number(),
  finalizeAt: z.number(),
})
