import Head from 'next/head'
import { useRouter } from 'next/dist/client/router'
import Header from './components/Header'
import Footer from './components/Footer'
import { format } from 'date-fns'
import InfoCard from './components/InfoCard'
import Map from './components/Map'

const Search = ({ searchResults }) => {
  const router = useRouter()

  // ES6 DESTRUCTURING
  const { location, startDate, endDate, numberOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Head>
        <title>Search | Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={`${location}, ${range}`} />
      <main className="flex">
        <section className="flex-grow px-6 md:pt-14">
          <p className="mb-2 text-xs">
            300+ Stays from {range} for {numberOfGuests} guests
          </p>
          <h1 className="mb-6 text-3xl font-semibold">Stays in {location}</h1>
          <div className="mb-5 hidden gap-3 whitespace-nowrap text-gray-800 lg:flex">
            <p className="button">Flexible Cancellations</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <h2>
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                </h2>
              )
            )}
          </div>
        </section>
        <section className="hidden cursor-pointer xl:sticky xl:top-0 xl:inline-flex xl:h-screen xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <section className="bg-gray-100">
        <Footer />
      </section>
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )
  return {
    props: {
      searchResults,
    },
  }
}
