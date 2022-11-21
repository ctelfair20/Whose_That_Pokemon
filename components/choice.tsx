import { useState } from 'react'
import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
}

const Choice = ({ pokemon }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = () => {
    // when clicked, toggle border color
    // check if selected pokemon is correct
    // render a green border
    // else
    // render a red border
  }

  return (
    isCorrect ?
      <div className={styles.correct}> {pokemon.name} </div> :
      <div className={styles.choice}> {CapsName} </div>
  );
}

export default Choice;