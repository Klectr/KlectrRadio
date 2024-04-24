export function Popular() {
  return (
    <div className="bg-gray-300 flex-1 rounded-xl flex flex-col max-h-[200px] overflow-hidden">
      <div id="middle-main" className="font-bold p-4 bg-white flex-1 rounded-xl shadow-md flex flex-col gap-2">
        <h2>Popular</h2>
        <div className="flex gap-4 overflow-y-scroll">
          {dummyData.map(x => (
            <div className="flex flex-col min-w-[100px]">
              <img src={x.image} width={100} className="rounded-xl" />
              <p className="text-[.8rem] text-gray-500">{x.title}</p>
              <small className="text-[.6rem] text-gray-300">{x.location}</small>
            </div>
          ))}
        </div>
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

