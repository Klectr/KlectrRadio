import { createStore } from "kaioken"

export enum Navs {
  MAIN,
  ADD,
  PLAYER,
}

const useNavigationStore = createStore(Navs.MAIN, (set) => ({
  navigate: (value) => set(() => value),
}))

export default useNavigationStore
