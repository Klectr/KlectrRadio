export function MusicPlayer() {
  return (
    <div className="flex justify-between p-2 bg-gray-300 flex-[0.5] rounded-xl max-h-[100px] gap-2 items-center pb-5">
      <div className="flex gap-2 items-center flex-[0.5]">
        <img
          width={50}
          className="rounded-xl"
          src="https://www.thispersondoesnotexist.com"
          alt="station art"
        />

        <div className="flex flex-col" style={{ overflowX: 'hidden' }}>
          <p className="text-sm" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Camden to Chinatown</p>
          <p className="text-sm" style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Loafy Building, Raimu</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <div className="flex gap-1 justify-center">
          <svg
            id="playbutton"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-play w-5"
          >
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </div>

        <div className="flex gap-1">
          <p>0:40</p>
          <input type="range" />
          <p>1:44</p>
        </div>
      </div>

      <div className="flex flex-row flex-[0.5] gap-1 justify-end items-end">
        <svg
          id="volume"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-volume-1 w-5"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
        <input type="range" />
      </div>
    </div>
  )
}

