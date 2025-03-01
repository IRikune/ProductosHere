import { z } from "zod"

export const idSchema = z.string().ulid()

export const productIDSchema = z.number()
