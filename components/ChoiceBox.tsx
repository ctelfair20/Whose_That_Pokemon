import React from 'react'
import { useEffect, useState } from 'react'
import Choice from './Choice'
import { Pokemon } from '../pages/index'
import { isCorrectI, Status } from './BackgroundImage'
import { randomizeChoices } from '../helperFunctions'
import stlyes from '../styles/Choice.module.css'

interface Props {
  pokemonArray: Pokemon[]
  setShouldBeVisible: (show: boolean) => void
  gameOver: boolean
  setGameOver: (status: boolean) => void
  isCorrect: isCorrectI
  setIsCorrect: (update: isCorrectI) => void
  status: Status
  setStatus: (status: Status) => void
};

const ChoiceBox = ({ pokemonArray, setShouldBeVisible, gameOver, setGameOver, isCorrect, setIsCorrect, status, setStatus }: Props) => {

  const [mixedArray, setMixedArray] = useState<Pokemon[]>([])

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
    const mixed = randomizeChoices(pokemonArray);
    setMixedArray(mixed);
  }, [pokemonArray])

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