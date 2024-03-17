import { useEffect } from "kaioken"
import Main from "./pages/Main"
import Player from "./pages/Player"
import Add from "./pages/Add"
import useNavigationStore, { Navs } from "./hooks/navigationStores"
import { useStorage } from "./hooks/storageStores"
import { useStationsStore } from "./hooks/stationStores"

export function App() {
  const { getStationsFile } = useStorage()
  const { override } = useStationsStore()
  const { value } = useNavigationStore()

  useEffect(() => {
    getStationsFile()
      .then(res => res && override(res))
      .catch()
  }, [])


  switch (value) {
    case Navs.MAIN:
      return <Main />
    case Navs.ADD:
      return <Add />
    case Navs.PLAYER:
      return <Player />
    default:
      return <h1>404 Not Found</h1>
  }
}

