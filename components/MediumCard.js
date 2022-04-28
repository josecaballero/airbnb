import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer transition ease-out ">
      <div className="relative mb-4 h-80 w-80 overflow-hidden rounded-lg">
        <Image
          src={img}
          layout="fill"
          className="transform transition duration-300 hover:scale-105"
        />
      </div>
      <h3 className="text-lg">{title}</h3>
    </div>
  )
}

export default MediumCard
