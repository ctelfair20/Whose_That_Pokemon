import axios from "axios";
import { Pokemon } from './pages/index';
import { isCorrectI } from './components/BackgroundImage';

interface SlotsI {
  [slot: number]: null | Pokemon
}

export const resetIsCorrect = (setIsCorrect: (isCorrect: isCorrectI) => void) => {
  const clearCorrect: isCorrectI = {
    1: "not selected",
    2: "not selected",
    3: "not selected",
    4: "not selected"
  };
  setIsCorrect(clearCorrect);
}

export const randomizeChoices = (pokemonArray: Pokemon[]) => {
  // takes in an array of pokemon - [{A}, {B}, {C}, {D}]
  // creates an array that holds the possible indices - [0,1,2,3]
  const indicesArray: number[] = [0, 1, 2, 3];
  // create an empty obj - {0: null,...}
  const slots: SlotsI = { 0: null, 1: null, 2: null, 3: null };
  // create empty array to repopulate with chioces in diff order
  let mixed: Pokemon[] = [];
  // while index array still has elements inside
  while (indicesArray.length) {

    // get a number between 0 and 3 -  random index
    const random: number = Math.floor(Math.random() * 4);
    // check if obj at random index is null
    if (slots[random] === null) {
      // pop off the last number
      const popped: number | undefined = indicesArray.pop();
      // use that popped number to access a pokemon and fill the slot
      if (typeof popped === 'number') {
        slots[random] = pokemonArray[popped];
        // add pokemon to the empty array at the random index
        mixed[random] = pokemonArray[popped];
      }
    }
  }
  // return the empty array of mixed pokemon - [{B}, {D}, {A}, {C}]
  return mixed;
}

/**
 * randomNumber generates a number based on the generation of pokemon
 * returns a number within that generation's range
 * @param gen - number
 * @return number
 */

export const randomNumber = (gen: number) => {
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
      num = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
      break;
    case 2:
      num = Math.floor(Math.random() * (251 - 152 + 1)) + 152;
      break;
    case 3:
      num = Math.floor(Math.random() * (386 - 252 + 1)) + 252;
      break;
    case 4:
      num = Math.floor(Math.random() * (493 - 387 + 1) + 387);
      break;
    case 5:
      num = Math.floor(Math.random() * (649 - 494 + 1)) + 494;
      break;
    case 6:
      num = Math.floor(Math.random() * (721 - 650 + 1)) + 650;
      break;
    case 7:
      num = Math.floor(Math.random() * (809 - 722 + 1)) + 722;
      break;
    case 8:
      num = Math.floor(Math.random() * (905 - 810 + 1)) + 810;
      break;
    case 9:
      num = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
      break;
  }
  return num;
}

export const fetchFourPokemon = async (setPokemonArr: (pokemonArr: Pokemon[]) => void) => {
  const pokemonArray: Pokemon[] = [];

  // Call an external API endpoint to get a pokemon.
  for (let i = 0; i < 4; i++) {
    const pokemon = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomNumber(1)}`);
    pokemonArray.push(pokemon.data);
  }
  // set state with pokemonArray
  setPokemonArr(pokemonArray)
}

// ** I believe using this function was the source of my hydration issues. Was initially at the bottom of my index file not within the home component**
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