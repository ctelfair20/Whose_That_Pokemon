import React from 'react';
import styles from '../styles/Timer.module.css';

interface Props {
  gameOver: boolean
}

const Timer = ({ gameOver }: Props) => {
  return (
    <>
      {
        gameOver &&
        <div className={styles['timer-box']}>
          <div className={styles['timer-text']}>
            You Won! Next Pokemon in...
          </div>
        </div>
      }
    </>
  );
}

export default Timer;