import { writeTextFile } from "@tauri-apps/api/fs"
import { Navs, useNavigator } from "../hooks/useNavigator"
import { Station, useStationsProvider } from "../providers/StationsProvider"
import { useModel } from "kaioken"
import { useStorageContext } from "../providers/StorageProvider"

export default function Add() {
  const { setNavitation } = useNavigator()
  const { setStations } = useStationsProvider()
  const { appDataDirRef } = useStorageContext()
  const [titleRef, title,] = useModel<HTMLInputElement, string>('')
  const [streamRef, streamUrl,] = useModel<HTMLInputElement, string>('')
  const [avatarRef, avatarUrl,] = useModel<HTMLInputElement, string>('')

  function _handleStationAdd() {
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
    setNavitation(Navs.MAIN)
  }

  return (
    <div >
      <button onclick={() => setNavitation(0)} className="ml-2 px-2 py-1 hover:bg-gray-300 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div className="flex flex-col gap-3 p-2">
        <input ref={titleRef} className="rounded p-1" ariaLabel={"title"} placeholder="Title" />
        <input ref={streamRef} className="rounded p-1" ariaLabel={"url"} placeholder="Stream URL" />
        <input ref={avatarRef} className="rounded p-1" ariaLabel={"avatar"} placeholder="Image URL" />
        <button onclick={_handleStationAdd} className="rounded bg-blue-400 p-1">Save</button>
      </div>
    </div>
  )
}
