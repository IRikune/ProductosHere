import { monotonicUlid } from "@std/ulid"
import { kv } from "../../mod.ts"
import type { Serie } from "../types/mod.ts"

interface KvSerieResult {
  ok: boolean
  data?: Serie | Serie[]
}

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

export async function getSerie(id: Serie["id"]): KvSerieResultMaybe {
  const primaryKey = ["series", id]
  const entry = await kv.get<Serie>(primaryKey)
  const serie = entry.value
  const res: KvSerieResult = { ok: true, data: serie || [] }
  return res
}

export async function createSerie(serie: Serie): KvSerieResultMaybe {
  const serieID = monotonicUlid()
  const primaryKey = ["series", serieID]
  const res = await kv
    .atomic()
    .check({ key: primaryKey, versionstamp: null })
    .set(primaryKey, serie)
    .commit()
  return res
}

export async function updateSerie(serie: Serie): KvSerieResultMaybe {
  const primaryKey = ["series", serie.id]
  const res = await kv
    .atomic()
    .set(primaryKey, serie)
    .commit()
  return res
}

export async function deleteSerie() {
  const primaryKey = ["series"]
  await kv.delete(primaryKey)
  return { ok: true }
}
