import { Navs, useNavigator } from "./hooks/useNavigator"
import { useEffect } from "kaioken"
import { useStationsProvider } from "./providers/StationsProvider"
import Main from "./pages/Main"
import Player from "./pages/Player"
import { useStorageContext } from "./providers/StorageProvider"
import Add from "./pages/Add"

export function App() {
  const { setStations } = useStationsProvider()
  const { getStationsFile } = useStorageContext()
  const { nav } = useNavigator()

  useEffect(() => {
    getStationsFile()
      .then(res => res && setStations(res))
      .catch()
  }, [])

  switch (nav) {
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

