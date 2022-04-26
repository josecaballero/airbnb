import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 grid grid-cols-3 shadow-md bg-white items-center p-5 md:px-10">
      {/* Left (Logo) */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto z-50">
        <Image
        src="https://links.papareact.com/qd3"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        />
      </div>

      {/* Middle (Search Bar) */}
      <div className="flex md:border-2 rounded-full py-2 md:shadow-sm">
        <input className="pl-5 bg-transparent outline-none flex-grow text-gray-600 placeholder-grey-400 text-sm" type="text" placeholder="Start your search" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right (Menu) */}
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <p className="hidden md:flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6"/>
        <div className="flex border-2 space-x-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
