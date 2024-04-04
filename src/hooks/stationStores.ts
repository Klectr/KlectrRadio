import { createStore } from "kaioken"

export const useStationsStore = createStore(
  null as Station[] | null,
  (set, get) => ({
    add: (station: Station): Station[] => {
      let newState: Station[] = [...(get() ?? []), station]
      set(newState)
      return newState
    },
    rmStation: (stationId): Station[] => {
      let newState: Station[] | null =
        get()?.filter((station) => station.id !== stationId) ?? []
      set(newState)
      return newState
    },
    override: (stationsList: Station[]) => {
      set(stationsList)
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
