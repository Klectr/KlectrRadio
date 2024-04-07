function MusicPlayer() {
  return (
    <div
      id="top"
      className="justify-between p-2 bg-gray-300 flex-[0.5] rounded-xl max-h-[100px] flex gap-2 items-center"
    >
      <div className="flex gap-2 items-center">
        <img
          className="rounded-xl"
          src="https://www.thispersondoesnotexist.com"
          width={80}
          height={"auto"}
          alt="station art"
        />
        <div className="flex flex-col">
          <p>Camden to Chinatown</p>
          <p>Loafy Building, Raimu</p>
        </div>
      </div>

      <div>
        <div className="flex gap-1 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-play"
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

      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-volume-1"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
        <input type="range" />
      </div>
    </div>
  )
}

export default MusicPlayer
