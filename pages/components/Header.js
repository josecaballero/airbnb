import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { useRouter } from 'next/dist/client/router'

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numberOfGuests, setNumberOfGuests] = useState('1')
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const showDatePicker = (input) => {
    setSearchInput(input.target.value)
  }

  const resetInput = () => {
    setSearchInput('')
  }

  const search = () => {
    router.push(
      {
        pathname: '/search',
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          numberOfGuests,
        },
      },
      resetInput()
    )
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-1 items-center bg-white p-3 sm:p-4 md:grid-cols-3 md:px-10">
      {/* Left (Logo) */}
      <div
        onClick={() => router.push('/')}
        className="relative my-auto hidden h-8 cursor-pointer items-center sm:h-10 md:flex "
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle (Search Bar) */}
      <div className="flex cursor-pointer rounded-full border py-2">
        <input
          value={searchInput}
          onChange={showDatePicker}
          className="placeholder-grey-400 flex-grow bg-transparent pl-4 text-xs text-gray-600 outline-none"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon className="mr-2 inline-flex h-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2" />
      </div>

      {/* Right (Menu) */}
      <div className="hidden items-center justify-end space-x-4 text-gray-500 md:flex">
        <p className="hidden cursor-pointer text-sm md:flex">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="col-span-3 mx-auto flex w-full flex-col md:w-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#fd5b61']}
            onChange={handleSelect}
            className="!block xs:!inline-flex"
          />
          <div className="mb-4 flex items-center border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
