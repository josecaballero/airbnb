import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative cursor-pointer">
      <div className="relative h-96 min-w-[300] rounded-lg">
        <Image src={img} layout="fill" objectFit="cover" className="" />
      </div>
      <div className="absolute top-20 left-12">
        <h3 className="mb-2 w-64 text-4xl">{title}</h3>
        <p className="mb-8">{description}</p>
        <button className="rounded-lg bg-gray-900 px-6 py-3 text-sm text-white transition duration-150 hover:bg-gray-700">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default LargeCard
