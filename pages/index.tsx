import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { fetchFourPokemon } from '../helperFunctions'
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

export default function Home() {
  const [pokemonArr, setPokemonArr] = useState<Pokemon[]>([]);
  const [gen, setGen] = useState('1');

  useEffect(() => {
    fetchFourPokemon(setPokemonArr, gen);
  }, []);

  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?! </title>
      </Head>
      <main>
        {/* Blocker to prevent component from loading before pokemon data was fetched */}
        {pokemonArr.length > 0 &&
          <BackgroundImage pokemonArray={pokemonArr} setPokemonArr={setPokemonArr} gen={gen} setGen={setGen} />
        }
      </main>
    </div>
  )
}