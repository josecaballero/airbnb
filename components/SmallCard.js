import Image from 'next/image'

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex transform cursor-pointer items-center gap-4 rounded-xl transition duration-200 ease-out hover:scale-105 hover:bg-gray-100">
      {/* Left Block (Image) */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right Block (Info) */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
