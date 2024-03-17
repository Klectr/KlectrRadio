import { writeTextFile } from "@tauri-apps/api/fs"
import { useModel } from "kaioken"
import { Station, useStationsStore } from "../hooks/stationStores"
import { useStorageStore } from "../hooks/storageStores"
import useNavigationStore, { Navs } from "../hooks/navigationStores"

export default function Add() {
  const { value } = useStorageStore()
  const [titleRef, title,] = useModel<HTMLInputElement, string>('')
  const [streamRef, streamUrl,] = useModel<HTMLInputElement, string>('')
  const [avatarRef, avatarUrl,] = useModel<HTMLInputElement, string>('')

  function _handleStationAdd() {
    const data: Station = {
      id: Math.random().toString(16).slice(2),
      url: streamUrl,
      avatar: avatarUrl,
      title: title
    }
    const store = useStationsStore.methods.add(data)
    const valid = store && value
    valid && void writeTextFile(value, JSON.stringify(store))
    useNavigationStore.setState(Navs.MAIN)
  }

  return (
    <div >
      <button onclick={() => useNavigationStore.setState(Navs.MAIN)} className="ml-2 px-2 py-1 hover:bg-gray-300 rounded-full">
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
