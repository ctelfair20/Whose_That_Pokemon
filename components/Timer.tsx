import React, { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';
import { Pokemon } from '../pages';
import { isCorrectI, Status } from './BackgroundImage';
import { fetchFourPokemon, resetIsCorrect } from '../helperFunctions';

interface Props {
  gameOver: boolean
  setGameOver: (status: boolean) => void
  setPokemonArray: (pokemonArray: Pokemon[]) => void
  setIsCorrect: (update: isCorrectI) => void
  setShouldBeVisible: (isVisable: boolean) => void
  setStatus: (status: Status) => void
}

const Timer = ({ gameOver, setPokemonArray, setGameOver, setIsCorrect, setShouldBeVisible, setStatus }: Props) => {

  const [countDown, setCountDown] = useState(3);

  useEffect(() => {
    if (countDown === 0) {
      newGame()
    }
  }, [countDown])

  const newGame = () => {
    //fetch new set of pokemom
    fetchFourPokemon(setPokemonArray);
    // reset gameOver
    setGameOver(false);
    // reset isCorrect
    setIsCorrect({
      1: "not selected",
      2: "not selected",
      3: "not selected",
      4: "not selected"
    });
    // reset isVisable
    setShouldBeVisible(false)
    // reset status
    setStatus({ wrong: 0, right: 0 })
    // reset countDown
    setCountDown(3)
  }

  const timeUntilNextGame = () => {
    if (gameOver && countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);
    }
    return countDown;
  }

  return (
    <>
      {
        gameOver &&
        <div className={styles['timer-box']}>
          <div className={styles['timer']}>
            <div className={styles['timer-text']}>
              {`You Won! Next Pokemon in...${timeUntilNextGame()}`}
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Timer;