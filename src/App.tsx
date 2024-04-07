import { useEffect } from "kaioken"
import { useStorage } from "./hooks/storageStores"
import { useStationsStore } from "./hooks/stationStores"
import { MusicPlayer } from "./components/music_player"

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
      <div className="pt-2 min-h-[95vh] max-h-[95vh] min-w-[150px] flex flex-col gap-4 justify-start">
        <div className="w-full flex justify-center">
          <input type="text" className="rounded-md border p-1 w-full" placeholder="Search" />
        </div>
        <div>
          <h2 className="text-gray-500 text-sm">Music</h2>
          <ul>
            <li className="flex gap-2 hover:bg-blue-100 rounded-md p-1 cursor-pointer hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radio-tower w-[15px]">
                <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
                <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
                <circle cx="12" cy="9" r="2" />
                <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
                <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
                <path d="M9.5 18h5" />
                <path d="m8 22 4-11 4 11" />

              </svg>Radio
            </li>
          </ul>
        </div>
        <button className="px-4 border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100 w-full">Create New +</button>
      </div>


      {/* Right Section __________*/}
      <div className="flex-1 min-h-[95vh] max-h-[95vh] flex h-0 p-2">
        <div className="bg-gray-200 w-full border rounded-xl p-4 flex-col flex gap-4">

          {/* Music Player __________*/}
          <MusicPlayer />

          {/* Popular Section __________*/}
          <div id="middle" className="bg-gray-300 flex-[.8] rounded-xl flex flex-col max-h-[150px]">
            <div id="middle-main" className="font-bold p-2 bg-white flex-1 rounded-xl  shadow-md">
              <h2>Popular</h2>
            </div>
          </div>

          {/* Bottom Section __________*/}
          <div id="bottom" className="flex-1 rounded-xl flex flex-row gap-4">
            {/* Local Radio __________*/}
            <div id="bottom-l" className="font-bold p-2 bg-white flex-1 rounded-xl shadow-md">
              <h2>Local Radio</h2>
            </div>

            {/* Recommended Radio __________*/}
            <div id="bottom-r" className="font-bold p-2 bg-white flex-1 rounded-xl  shadow-md">
              <h2>Recommended For You</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

