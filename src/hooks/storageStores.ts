import { exists, readTextFile, writeTextFile } from "@tauri-apps/api/fs"
import { appDataDir } from "@tauri-apps/api/path"
import { createStore } from "kaioken"
import { Station } from "../hooks/stationStores"

export const useStorageStore = createStore(
  null as string | null,
  (_set) => ({})
)

export function useStorage() {
  async function _createStationsFile(path: string): Promise<Station[]> {
    await writeTextFile(path, "[]", { append: false })
    return []
  }

  async function getStationsFile(): Promise<Station[] | undefined> {
    let dir: null | string = null
    try {
      dir = await appDataDir()
    } catch (err) {
      console.error("getStationsFile: ", err)
      return undefined
    }
    if (!dir) return undefined
    const path = `${dir}stations.json`
    if (!(await exists(path))) return await _createStationsFile(path)
    const jsonString = await readTextFile(path)
    const json = JSON.parse(jsonString) as Station[]
    useStorageStore.setState(() => path)
    return json
  }

  return { getStationsFile }
}
