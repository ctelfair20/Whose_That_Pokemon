import React from 'react'
import { useEffect, useState } from 'react'
import Choice from './Choice'
import { Pokemon } from '../pages/index'
import stlyes from '../styles/Choice.module.css'

interface SlotsI {
  [slot: number]: null | Pokemon
}

interface Props {
  pokemonArray: Pokemon[]
  setShouldBeVisible: (show: boolean) => void
};

export type isCorrectI = {
  [id: number]: string
}

const ChoiceBox = ({ pokemonArray, setShouldBeVisible }: Props) => {

  const [mixedArray, setMixedArray] = useState<Pokemon[]>([])
  const [status, setStatus] = useState({ wrong: 0, right: 0 })
  const [gameOver, setGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState<isCorrectI>(
    {
      1: "not selected",
      2: "not selected",
      3: "not selected",
      4: "not selected"
    }
  );

  useEffect(() => {
    if (status.wrong === 3 || status.right === 1) {
      // show pokemon
      setShouldBeVisible(true);
      // set gameOver to be true
      setGameOver(true)
      // fetch 4 more pokemon after 2-3 seconds
    }
  }, [status])

  useEffect(() => {
    const mixed = randomizeChoices();
    setMixedArray(mixed);
  }, [])

  const randomizeChoices = () => {
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

  const allChoices = (start: number, mixedArray: Pokemon[], end = 4) => {
    // need to randomize choices so that the answer isn't in the same spot every time.
    // maybe this should be do in a use effect?
    return mixedArray.map((pokemon, i) => {
      if (i >= start && i < end) {
        return <Choice key={pokemon.id + i + 1} id={i + 1} pokemonArray={pokemonArray} pokemon={pokemon} status={status} setStatus={setStatus} isCorrect={isCorrect} setIsCorrect={setIsCorrect} gameOver={gameOver} />
      }
    });
  }

  return (
    <>
      {
        mixedArray.length > 0 &&
        <div className={stlyes['choices-box']}>
          <div>
            {allChoices(0, mixedArray, 2)}
          </div>
          <div>
            {allChoices(2, mixedArray)}
          </div>
        </div>
      }
    </>
  );
}

export default ChoiceBox;