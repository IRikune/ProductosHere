import { z } from "zod"
import { idSchema } from "./common.ts"

export const userSchema = z.object({
  id: idSchema,
  name: z.string().min(3),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  phone: z.number().positive(),
  addresses: z.string().array(),
  contracts: idSchema.array(),
  orders: idSchema.array(),
})
