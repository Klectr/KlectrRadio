export function LocalRadio() {
  return (
    <div id="bottom-l" className="flex flex-col min-h-0 overflow-y-hidden font-bold p-2 bg-white flex-1 rounded-xl shadow-md gap-2">
      <h2 >Local Radio</h2>

      <div className="flex flex-col gap-4 overflow-y-scroll h-full">
        {dummyData.map(x => (
          <div className="flex flex-row min-w-[100px] gap-2 items-center">
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
  }
]

