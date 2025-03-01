import type { z } from "zod"
import type {
  deleteProductSchema,
  getProductSchema,
  productSchema,
} from "../schemas/products.ts"
import type { userSchema } from "../schemas/users.ts"
import type { contractSchema } from "../schemas/contracts.ts"
import type { discountSchema, orderSchema } from "../schemas/orders.ts"
import type {
  postProductSchema,
  putProductSchema,
} from "../schemas/products.ts"
import type {
  deleteSerieSchema,
  getSerieSchema,
  postSerieSchema,
  putSerieSchema,
  serieSchema,
} from "../schemas/series.ts"

export type Product = z.infer<typeof productSchema>

export type User = z.infer<typeof userSchema>

export type Contract = z.infer<typeof contractSchema>

export type Order = z.infer<typeof orderSchema>

export type Serie = z.infer<typeof serieSchema>

export type Discount = z.infer<typeof discountSchema>

export type GetProductType = z.infer<typeof getProductSchema>

export type PostProductType = z.infer<typeof postProductSchema>

export type PutProductType = z.infer<typeof putProductSchema>

export type DeleteProductType = z.infer<typeof deleteProductSchema>

export type GetSerieType = z.infer<typeof getSerieSchema>

export type PostSerieType = z.infer<typeof postSerieSchema>

export type PutSerieType = z.infer<typeof putSerieSchema>

export type DeleteSerieType = z.infer<typeof deleteSerieSchema>
