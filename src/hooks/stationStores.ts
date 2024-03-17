import { writeTextFile } from "@tauri-apps/api/fs"
import { createStore } from "kaioken"

export const useStationsStore = createStore(
  null as Station[] | null,
  (set) => ({
    add: (station: Station): Station[] => {
      let newState: Station[] | null = null
      set((state) => {
        newState = [...(state ?? []), station]
        return newState
      })
      //@ts-ignore
      return newState
    },
    delete: (stationId) =>
      set(
        (state) => state?.filter((station) => station.id !== stationId) ?? []
      ),
    override: (stationsList: Station[]) => {
      set((_state) => stationsList)
    },
  })
)

export const useSelectStationStore = createStore(
  null as Station | null,
  (set) => ({
    make: (station) => set((_state) => station),
    clear: () => set((_state) => null),
  })
)

export interface Station {
  id: string
  url: string
  avatar: string
  title: string
}
