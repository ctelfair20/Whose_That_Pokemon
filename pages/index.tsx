import axios from 'axios'
import Head from 'next/head'
import BackgroundImage from '../components/BackgroundImage'

export type Props = {
  pokemon: Pokemon
}

export type Pokemon = {
  id: number,
  name: string,
  sprites: Sprite,
}

export type Sprite = {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export default function Home({ pokemon }: Props) {

  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?!</title>
      </Head>
      <main>
        <BackgroundImage pokemon={pokemon} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  // Call an external API endpoint to get a pokemon.
  const res = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/6');
  const pokemon = res.data;

  // By returning { props: { pokemon } }, the PokemonImage component will receive `pokemon` as a prop at build time
  return {
    props: {
      pokemon,
    },
  }
}