import Head from 'next/head';
import Banner from './components/Banner';
import Header from "./components/Header";

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>AirBnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="py-10">
          <h2 className="text-4xl font-semibold mb-5">Explore Nearby</h2>

{/* Pinto la información que me responde el API con map */
        exploreData.map( (item) => (
          <h1>{item.location}</h1>
        ) )
}
        </section>
      </main>
    </div>
  );
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
  const exploreData = await fetch("https://links.papareact.com/pyp").then( (res) => res.json() )

  return {
    props: {
      exploreData
    }
  }
};

