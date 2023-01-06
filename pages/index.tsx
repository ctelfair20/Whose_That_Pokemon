import React, { useEffect, useState } from 'react'
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

/**
 * randomNumber generates a number based on the generation of pokemon
 * returns a number within that generation's range
 * @param gen - number
 * @return number
 */

const randomNumber = (gen: number) => {
  // gen 1 = 1 - 151
  // gen 2 = 152 - 251
  // gen 3 = 252 - 386
  // gen 4 = 387 - 493
  // gen 5 = 494 - 649
  // gen 6 = 650 - 721
  // gen 7 = 722 - 809
  // gen 8 = 810 - 905
  // all gens = 1 - 905
  let num;
  switch (gen) {
    case 1:
      num = Math.round(Math.random() * (152 - 1) + 1);
      break;
    case 2:
      num = Math.round(Math.random() * (252 - 152) + 152);
      break;
    case 3:
      num = Math.round(Math.random() * (387 - 252) + 252);
      break;
    case 4:
      num = Math.round(Math.random() * (494 - 387) + 387);
      break;
    case 5:
      num = Math.round(Math.random() * (650 - 494) + 494);
      break;
    case 6:
      num = Math.round(Math.random() * (722 - 650) + 650);
      break;
    case 7:
      num = Math.round(Math.random() * (810 - 722) + 722);
      break;
    case 8:
      num = Math.round(Math.random() * (905 - 810) + 810);
      break;
    case 9:
      num = Math.round(Math.random() * (905 - 1) + 1);
      break;
  }
  return num;
}

export default function Home() {
  const [pokemonArr, setPokemonArr] = useState<Pokemon[]>([]);
  // const [test, setTest] = useState(0)

  useEffect(() => {
    console.log('fetched pokemon...how many times??')
    // console.log('test', test)
    // if (test === 1) {
    fetchFourPokemon();
    // }
    // setTest(test + 1)
    // console.log('test2', test)
  }, []);

  const fetchFourPokemon = async () => {
    const pokemonArray: Pokemon[] = [];

    // Call an external API endpoint to get a pokemon.
    for (let i = 0; i < 4; i++) {
      const pokemon = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomNumber(1)}`);
      pokemonArray.push(pokemon.data);
    }
    // set state with pokemonArray
    console.log('fetched: ', pokemonArray);

    setPokemonArr(pokemonArray)
  }

  return (
    <div>
      <Head>
        <title>Who&apos;s That Pokemon?! </title>
      </Head>
      <main>
        {/* Blocker to prevent component from loading before pokemon data was fetched */}
        {pokemonArr.length > 0 &&
          <BackgroundImage pokemonArray={pokemonArr} setPokemonArr={setPokemonArr} />
        }
      </main>
    </div>
  )
}

// ** I believe using this function was the source of my hydration issues**
// export const getStaticProps = async () => {
//   const pokemonArray: Pokemon[] = [];

//   // Call an external API endpoint to get a pokemon.
//   for (let i = 0; i < 4; i++) {
//     const pokemon = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomNumber(1)}`);
//     pokemonArray.push(pokemon.data);
//   }

//   // By returning { props: { pokemon } }, the PokemonImage component will receive `pokemon` as a prop at build time
//   return {
//     props: {
//       pokemonArray,
//     },
//   }
// }