import { navigate } from "kaioken"
import { Station, useSelectStationStore } from "../hooks/stationStores"
import { useStationsStore } from "../hooks/stationStores"

export default function Main() {
  const { make } = useSelectStationStore()
  const stations = useStationsStore.getState()

  function _handleStationClick(station: Station) {
    make(station)
    navigate('/player')
  }

  if (!stations?.length) {
    return (
      <div className="p-4 flex flex-col align-between h-full gap-2">
        <h2 className="text-black text-opacity-50 font-bold text-center">No Stations Added</h2>
        <button className="bg-white rounded-xl p-2" onclick={() => navigate('/add')}>+</button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-end">
        <button className="mr-4 px-2 py-1 hover:bg-gray-300 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </button>
      </div>


      <div className="p-4 flex flex-col align-between h-full gap-2">
        {stations.map((s) => (
          <button onclick={() => _handleStationClick(s)} className="paper p-2 flex flex-row border gap-4">
            <img src={s.avatar} width={40} height={40} className="w-20 rounded-xl" />
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-xl">{s.title}</h2>
              <button className="border border-red-500 rounded w-full text-red-500 px-4">Delete</button>
            </div>
          </button>
        ))}
        <button className="bg-white rounded-xl p-2" onclick={() => navigate('/add')}>+</button>
      </div>
    </div>
  )
}
