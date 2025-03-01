import { monotonicUlid } from "@std/ulid"
import { kv } from "../../mod.ts"
import type {
  DeleteProductType,
  GetProductType,
  PostProductType,
  Product,
  PutProductType,
} from "../types/mod.ts"
import type { Serie as SerieType } from "../types/mod.ts"

interface getManyProductsOptions {
  serie?: SerieType["id"]
}

interface KvProductsResult {
  ok: boolean
  data?: Product | Product[]
}
type KvProductsResultMaybe = Promise<KvProductsResult>

// add actual serie by default
export async function getManyProducts(
  { serie = "" }: getManyProductsOptions,
): KvProductsResultMaybe {
  const primaryKey = [serie, "products"]
  const entries = kv.list<Product>({ prefix: primaryKey })
  const products: Product[] = []
  for await (const entry of entries) {
    const product = entry.value
    products.push(product)
  }
  const res: KvProductsResult = { ok: true, data: products }
  return res
}

interface getProductOptions {
  id: Product["id"]
}

export async function getProduct(
  { id }: GetProductType,
): KvProductsResultMaybe {
  const primaryKey = ["products", id]
  const entry = await kv.get<Product>(primaryKey)
  const product = entry.value
  const res: KvProductsResult = { ok: true, data: product || [] }
  return res
}

export async function createProduct(
  product: PostProductType,
) {
  const productID = monotonicUlid()
  const newProduct = { ...product, id: productID }
  const primaryKey = ["products", productID]
  const res = await kv.atomic()
    .check({ key: primaryKey, versionstamp: null })
    .set(primaryKey, newProduct)
    .commit()
  return res
}

export async function updateProduct(
  { id, product }: PutProductType,
) {
  const primaryKey = ["products", id]
  const res = await kv.atomic()
    .set(primaryKey, product)
    .commit()
  return res
}

export async function deleteProduct({ id }: DeleteProductType) {
  const primaryKey = ["products", id]
  await kv.delete(primaryKey)
  return { ok: true }
}
