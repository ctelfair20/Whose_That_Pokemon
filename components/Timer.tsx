import React, { useState } from 'react';
import styles from '../styles/Timer.module.css';
import { fetchFourPokemon } from '../helperFunctions';

interface Props {
  gameOver: boolean
  // setPokemonArray: () => void
}

const Timer = ({ gameOver }: Props) => {

  const [countDown, setCountDown] = useState(3);

  const timeUntilNextGame = () => {
    if (gameOver && countDown > 0) {
      setTimeout(() => {
        // console.log(countDown);
        setCountDown(countDown - 1);
      }, 1000);
    }
    // const newPokemonArray = fetchFourPokemon(setPokemonArray);
    return countDown;
  }

  return (
    <>
      {
        gameOver &&
        <div className={styles['timer-box']}>
          <div className={styles['timer-text']}>
            {`You Won! Next Pokemon in...${timeUntilNextGame()}`}
          </div>
        </div>
      }
    </>
  );
}

export default Timer;