import { useState } from 'react'
import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
}

const handleClick = () => {
  // when clicked, toggle border color
  // check if selected pokemon is correct
  // render a green border
  // else
  // render a red border
}

const Choice = ({ pokemon }: Props) => {

  const [isCorrect, setIsCorrect] = useState(false);

  return (
    isCorrect ?
      <div className={styles.correct}> {pokemon.name} </div> :
      <div className={styles.choice}> {pokemon.name} </div>
  );
}

export default Choice;