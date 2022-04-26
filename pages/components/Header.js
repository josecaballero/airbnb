import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 grid grid-cols-3 items-center bg-white p-5 shadow-md md:px-10">
      {/* Left (Logo) */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle (Search Bar) */}
      <div className="flex rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          className="placeholder-grey-400 flex-grow bg-transparent pl-5 text-sm text-gray-600 outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex" />
      </div>

      {/* Right (Menu) */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
