import { Navs, useNavigator } from "../hooks/useNavigator"
import { useStationsProvider } from "../providers/StationsProvider"

export default function Player() {
  const { setNavitation } = useNavigator()
  const { setSelectedStation, selectedStation } = useStationsProvider()

  function _handlePlayerBackClick() {
    setNavitation(Navs.MAIN)
    setSelectedStation(null)
  }

  return (
    <div >
      <button onclick={_handlePlayerBackClick} className="ml-2 px-2 py-1 hover:bg-gray-300 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div className="flex justify-center">
        <div className="p-8 w-80">
          {/*<!-- Album Cover -->*/}
          <img src={selectedStation?.avatar} alt={selectedStation?.title} className="w-64 h-64 mx-auto rounded-lg mb-4 shadow-md shadow-black-200" />
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
