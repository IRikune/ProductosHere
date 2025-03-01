import { kv } from "../../mod.ts"
import type { Product } from "../types/mod.ts"
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
export const getManyProducts = async (
  { serie = "" }: getManyProductsOptions,
): KvProductsResultMaybe => {
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
