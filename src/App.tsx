import { useEffect } from "kaioken"
import { useStorage } from "./hooks/storageStores"
import { useStationsStore } from "./hooks/stationStores"
import { Popular, Navigation } from "./components"

export function App() {
  const { getStationsFile } = useStorage()
  const { override } = useStationsStore()

  useEffect(() => {
    getStationsFile()
      .then(res => res && override(res))
      .catch()
  }, [])

  return (
    <div className="flex flex-row gap-2 px-2">

      {/* Left Section __________*/}
      <div className="pt-2 min-h-[98vh] max-h-[98vh] min-w-[150px] flex flex-col gap-4 justify-start">
        <div className="w-full flex justify-center">
          <input type="text" className="rounded-md border p-1 w-full" placeholder="Search" />
        </div>

        <div>
          <h2 className="text-gray-500 text-sm">Music</h2>
          <Navigation />
        </div>

        <button className="px-4 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100 w-full">Create New +</button>
      </div>


      {/* Right Section __________*/}
      <div className="flex-1 min-h-[98vh] max-h-[98vh] flex h-0 p-2 min-w-0">
        <div className="bg-gray-200 w-full border rounded-xl p-4 flex-col flex gap-4">
          {/*<MusicPlayer />*/}
          <Popular />
          {/* Bottom Section __________*/}

          <div id="bottom" className="flex-1 rounded-xl flex flex-row gap-4 bg-white">
            {/*<LocalRadio />*/}
            {/*<RecommendedRadio />*/}
          </div>
        </div>
      </div>
    </div>
  )
}

