import Head from 'next/head'
import Banner from './components/Banner'
import Header from './components/Header'
import SmallCard from './components/SmallCard'
import MediumCard from './components/MediumCard'

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
            Explore Nearby
          </h2>

          {/* PRE DESTRUCTURING */}
          {/*           {
            exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))
          } */}

          {/* POST DESTRUCTURING */}

          <div className="sm:grid-gap grid grid-cols-1 space-y-5 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Pinto la información que me responde el API con map */}
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
            Live Anywhere
          </h2>

          <div className="flex gap-x-5 overflow-scroll scrollbar-hide">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

// Pull some data from a server - API endpoints

/*
1º Función asíncrona (async await)
2º Llamada al API
3º Guardo la respuesta en una constante
4º Paso la info a través de props al componente
5º Mapeo la info
6º Pinto la información
*/

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData,
    },
  }
}
