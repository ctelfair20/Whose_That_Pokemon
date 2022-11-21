import { useState } from 'react'
import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
  pokemonArray: Pokemon[]
}

const Choice = ({ pokemon, pokemonArray }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const [isCorrect, setIsCorrect] = useState(false);

  const handleClick = () => {
    // when clicked, toggle border color
    // check if selected pokemon is correct
    // if selected pokemon is equal to the first pokemon in
    // render a green border
    // change isCorrect to true
    // else
    // render a red border
    // change isCorrect to false
  }

  return (
    isCorrect ?
      <div className={styles.correct}> {pokemon.name} </div> :
      <div className={styles.choice}> {CapsName} </div>
  );
}

export default Choice;