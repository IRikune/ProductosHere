import type { z } from "zod"
import type { productSchema } from "../schemas/products.ts"
import type { userSchema } from "../schemas/users.ts"
import type { contractSchema } from "../schemas/contracts.ts"
import type { orderSchema } from "../schemas/orders.ts"

export type Product = z.infer<typeof productSchema>

export type User = z.infer<typeof userSchema>

export type Contract = z.infer<typeof contractSchema>

export type Order = z.infer<typeof orderSchema>
