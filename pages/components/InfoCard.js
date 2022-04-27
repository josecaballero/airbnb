import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="mb-6 cursor-pointer gap-8 rounded-lg duration-150 sm:flex sm:p-6 sm:transition sm:hover:bg-gray-50">
      <div className="relative mb-4 h-56 w-full sm:mb-0 sm:h-24 sm:w-40 md:h-52 md:w-80">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <p className="text-gray-600">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-6">
          <div className="flex items-center gap-1">
            <StarIcon className="h-5 text-red-400" />
            <p>{star}</p>
          </div>
          <div className="">
            <p className="text-lg font-semibold lg:text-xl">{price}</p>
            <p className="text-right text-sm font-extralight text-gray-600">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
