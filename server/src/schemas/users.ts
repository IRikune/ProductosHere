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
const orderSchema = z.object({
  id: z.string(),
  series: z.string(),
  createdAt: z.number(),
  expectedDate: z.number(),
  expectedProducts: productSchema.array(),
  expectedAmount: z.number(),
  deliveredDate: z.number().optional(),
  deliveredProducts: productSchema.array().optional(),
  deliveredAmount: z.number().optional(),
  status: z.string(),
})
export const userSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.number(),
  directions: z.string().array(),
  contracts: contractSchema.array(),
  orders: orderSchema.array(),
})
