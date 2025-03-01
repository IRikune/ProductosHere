import { monotonicUlid } from "@std/ulid"
import { kv } from "../../mod.ts"
import type {
  DeleteSerieType,
  GetSerieType,
  PostSerieType,
  PutSerieType,
  Serie,
} from "../types/mod.ts"

type KvSerieResult =
  | { ok: true; data: Serie }
  | { ok: true; data: Serie[] }
  | { ok: true }
  | { ok: false; error?: string }

type KvSerieResultMaybe = Promise<KvSerieResult>

export async function getManySeries(): KvSerieResultMaybe {
  const primaryKey = ["series"]
  const entries = kv.list<Serie>({ prefix: primaryKey })
  const series: Serie[] = []
  for await (const entry of entries) {
    const serie = entry.value
    series.push(serie)
  }
  const res: KvSerieResult = { ok: true, data: series }
  return res
}

export async function getSerie({ id }: GetSerieType): KvSerieResultMaybe {
  const primaryKey = ["series", id]
  const entry = await kv.get<Serie>(primaryKey)
  return entry.value
    ? { ok: true, data: entry.value }
    : { ok: false, error: "Serie not found" }
}

export async function createSerie(serie: PostSerieType) {
  const serieID = monotonicUlid()
  const newSerie: Serie = { ...serie, id: serieID }
  const primaryKey = ["series", serieID]
  const res = await kv
    .atomic()
    .check({ key: primaryKey, versionstamp: null })
    .set(primaryKey, newSerie)
    .commit()
  return res
}

export async function getLastSerie(): KvSerieResultMaybe {
  const entries = kv.list<Serie>({ prefix: ["series"] }, {
    reverse: true,
    limit: 1,
  })

  for await (const entry of entries) {
    return { ok: true, data: entry.value }
  }
  return { ok: false }
}

export async function updateSerie(serie: PutSerieType) {
  const primaryKey = ["series", serie.id]
  const current = await kv.get<Serie>(primaryKey)
  const res = await kv
    .atomic()
    .check(current)
    .set(primaryKey, serie)
    .commit()
  return res
}

export async function deleteSerie({ id }: DeleteSerieType): KvSerieResultMaybe {
  const primaryKey = ["series", id]
  await kv.delete(primaryKey)
  return { ok: true }
}
