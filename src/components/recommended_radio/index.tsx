export function RecommendedRadio() {
  return (
    <div id="bottom-r" className="flex-col flex font-bold p-2 bg-white flex-1 rounded-xl  shadow-md gap-2">
      <h2>Recommended For You</h2>

      <div className="flex flex-col gap-4 overflow-y-scroll h-full">
        {dummyData.map(x => (
          <div className="flex flex-row min-w-[100px] items-center gap-2">
            <img src={x.image} width={50} className="rounded-xl" />
            <h3 className="text-xl text-gray-500">{x.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

const dummyData = [
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
  {
    location: 'Florida, USA',
    title: '93.3 FLZ',
    image: 'https://thispersondoesnotexist.com'
  },
]

