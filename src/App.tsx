import { exists, readTextFile, writeTextFile } from "@tauri-apps/api/fs"
import { Navs, useNavigator } from "./hooks/useNavigator"
import { appDataDir } from "@tauri-apps/api/path"
import { useEffect, useModel, useRef, useState } from "kaioken"

interface Station {
  url: string
  avatar: string
  title: string
}
export function App() {
  const { nav, setNavitation } = useNavigator()
  const [stations, setStations] = useState<Station[] | null>(null)
  const [titleRef, title,] = useModel<HTMLInputElement, string>('')
  const [streamRef, streamUrl,] = useModel<HTMLInputElement, string>('')
  const [avatarRef, avatarUrl,] = useModel<HTMLInputElement, string>('')
  const [selectedStation, setSelectedStation] = useState<Station | null>(null)
  const appDataDirRef = useRef<string>(null)

  useEffect(() => {
    appDataDir()
      .then(async (res) => {
        const path = `${res}/stations.json`
        if (await exists(path)) {
          console.log("file exists: ", path);
          const jsonString = await readTextFile(path)
          const json = JSON.parse(jsonString) as Station[]
          console.log(json)
          setStations(json)
          appDataDirRef.current = path
          return
        }

        console.error("File does not exist... creating")
        writeTextFile(path, "[]", { append: false })
      })
      .catch(err => console.error(err))


  }, [])
  function _handleStationAdd() {
    console.log({ title, streamUrl, avatarUrl })
    const data: Station = {
      url: streamUrl,
      avatar: avatarUrl,
      title: title
    }
    setStations(prev => {
      const newStations = [...(prev ?? []), data]
      // write file
      writeTextFile(appDataDirRef.current!, JSON.stringify(newStations))
      return newStations
    })
    console.log("Added station: ", data)
    setNavitation(Navs.MAIN)
  }

  function _handleStationClick(station: Station) {
    return function() {
      setSelectedStation(station)
      setNavitation(Navs.PLAYER)
    }
  }

  if (nav === Navs.MAIN) {
    if (!stations?.length) {
      return (
        <div className="p-4 flex flex-col align-between h-full gap-2">
          <h2 className="text-black text-opacity-50 font-bold text-center">No Stations Added</h2>
          <button className="bg-white rounded-xl p-2" onclick={() => setNavitation(1)}>+</button>
        </div>
      )
    }
    return (
      <div className="p-4 flex flex-col align-between h-full gap-2">
        {stations.map((s) => (
          <button onclick={_handleStationClick(s)} className="paper p-2 flex flex-row border gap-4">
            <img src={s.avatar} width={40} height={40} className="w-20 rounded-xl" />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl">{s.title}</h2>
              <button className="border border-red-500 rounded w-full text-red-500 px-4">Delete</button>
            </div>
          </button>
        ))}
        <button className="bg-white rounded-xl p-2" onclick={() => setNavitation(1)}>+</button>
      </div>
    )

  }

  if (nav === Navs.ADD) {
    return (
      <div className="flex flex-col gap-3 p-2">
        <button className="mr-auto px-2" onclick={() => setNavitation(0)}>Back</button>
        <div className="flex flex-col gap-2">
          <input ref={titleRef} className="rounded p-1" ariaLabel={"title"} placeholder="Title" />
          <input ref={streamRef} className="rounded p-1" ariaLabel={"url"} placeholder="Stream URL" />
          <input ref={avatarRef} className="rounded p-1" ariaLabel={"avatar"} placeholder="Image URL" />
          <button onclick={_handleStationAdd} className="rounded bg-blue-400 p-1">Save</button>
        </div>
      </div>
    )
  }

  function _handlePlayerBackClick() {
    setNavitation(Navs.MAIN)
    setSelectedStation(null)
  }

  if (nav === Navs.PLAYER) {
    return (
      <div className="bg-gray-100">
        <button onclick={_handlePlayerBackClick} className="px-2">Back</button>
        <div className="bg-gray-100 p-4 flex justify-center">
          <div className="paper p-8 w-80">
            {/*<!-- Album Cover -->*/}
            <img src={selectedStation?.avatar} alt={selectedStation?.title} className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50" />
            {/*<!-- Song Title -->*/}
            <h2 className="text-xl font-semibold text-center">{selectedStation?.title}</h2>
            {/*<!-- Artist Name -->*/}
            <p className="text-gray-600 text-sm text-center">Live Radio</p>
            <br />
            <audio autoplay controls src={selectedStation?.url}></audio>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>Not a navigation</div>
  )
}
// <div className="flex flex-col gap-3 p-2">
//         <button onclick={() => setNavitation(0)}>{"<"}</button>
//         <div>
//           <img src={selectedStation?.avatar} />
//           <h2>{selectedStation?.title}</h2>
//           <p>Live</p>
//           <div>
//             {/* progress bar */}
//           </div>
//
//           <div>
//             {/* play pause button */}
//           </div>
//         </div>
//       </div>
//
//
//
//{/*<!-- Music Controls -->*/}
// <div className="mt-6 flex justify-center items-center">
//   <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
//     <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//       <g id="SVGRepo_iconCarrier">
//         <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
//         <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
//       </g>
//     </svg>
//   </button>
//   <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4">
//     <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//       <g id="SVGRepo_iconCarrier">
//         <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#000000"></path>
//         <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#000000"></path>
//       </g>
//     </svg>
//   </button>
//   <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
//     <svg width="64px" height="64px" viewBox="0 0 24 24" className="w-4 h-4 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//       <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//       <g id="SVGRepo_iconCarrier">
//         <path d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z" fill="#000000"></path>
//         <path d="M22.75 5C22.75 4.58579 22.4142 4.25 22 4.25C21.5858 4.25 21.25 4.58579 21.25 5V19C21.25 19.4142 21.5858 19.75 22 19.75C22.4142 19.75 22.75 19.4142 22.75 19V5Z" fill="#000000"></path>
//       </g>
//     </svg>
//   </button>
// </div>
// {/*<!-- Progress Bar -->*/}
// <div className="mt-6 bg-gray-200 h-2 rounded-full">
//   <div className="bg-teal-500 h-2 rounded-full w-1/2"></div>
// </div>
// {/*<!-- Time Information -->*/}
// <div className="flex justify-between mt-2 text-sm text-gray-600">
//   <span>1:57</span>
//   <span>3:53</span>
// </div>
