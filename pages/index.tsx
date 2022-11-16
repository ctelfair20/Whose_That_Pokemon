import axios from 'axios'
import Head from 'next/head'
import BackgroundImage from '../components/BackgroundImage'

export type Props = {
  pokemonArray: Pokemon[]
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

export default function Home({ pokemonArray }: Props) {
  // console.log(pokemonArray);

  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?!</title>
      </Head>
      <main>
        <BackgroundImage pokemonArray={pokemonArray} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const pokemonArray: Pokemon[] = [];
  // Call an external API endpoint to get a pokemon.
  const pokemon1 = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/3');
  const pokemon2 = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/6');
  const pokemon3 = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/9');
  const pokemon4 = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/ditto');
  pokemonArray.push(pokemon1.data, pokemon2.data, pokemon3.data, pokemon4.data);

  // By returning { props: { pokemon } }, the PokemonImage component will receive `pokemon` as a prop at build time
  return {
    props: {
      pokemonArray,
    },
  }
}