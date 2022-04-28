import Image from 'next/image'

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[450px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center text-red-600">
        <p className="text-sm text-gray-800 sm:text-lg">
          Not sure where to go? Perfect.
        </p>
        <button className="my-3 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition hover:shadow-lg active:scale-90">
          I am flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
