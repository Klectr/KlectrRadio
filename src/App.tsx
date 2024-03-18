import { Route, Router, useEffect } from "kaioken"
import Main from "./pages/Main"
import { useStorage } from "./hooks/storageStores"
import { useStationsStore } from "./hooks/stationStores"
import Add from "./pages/Add"
import Player from "./pages/Player"

export function App() {
  const { getStationsFile } = useStorage()
  const { override } = useStationsStore()

  useEffect(() => {
    getStationsFile()
      .then(res => res && override(res))
      .catch()
  }, [])

  return (
    <Router basePath="">
      <Route path="/" element={Main} />
      <Route path="/add" element={Add} />
      <Route path="/player" element={Player} />
    </Router>
  )
}

