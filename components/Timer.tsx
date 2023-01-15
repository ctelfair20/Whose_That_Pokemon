import React, { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css';
import { Pokemon } from '../pages';
import { fetchFourPokemon, resetIsCorrect } from '../helperFunctions';

interface Props {
  gameOver: boolean
  setPokemonArray: (pokemonArray: Pokemon[]) => void
}

const Timer = ({ gameOver, setPokemonArray }: Props) => {

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
    resetIsCorrect();
  }



  const timeUntilNextGame = () => {
    if (gameOver && countDown > 0) {
      setTimeout(() => {
        // console.log(countDown);
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