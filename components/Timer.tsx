import React from 'react';
import styles from '../styles/Timer.module.css';

const Timer = () => {
  return (
    <div className={styles['timer-box']}>
      <div className={styles['timer-text']}>
        You Won! Next Pokemon in...
      </div>
    </div>
  );
}

export default Timer;