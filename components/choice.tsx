import { useState } from 'react'
import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
  pokemonArray: Pokemon[]
}

const Choice = ({ pokemon, pokemonArray }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const [isCorrect, setIsCorrect] = useState('not selected');

  const handleClick = () => {
    // when clicked, toggle border color
    // check if selected pokemon is correct
    // if selected pokemon is equal to the first pokemon in pokemonArray
    if (pokemon.name === pokemonArray[0].name) {
      // render a green border
      // change isCorrect to true
      setIsCorrect('correct');
      // else
    } else {
      // render a red border
      // change isCorrect to false
      setIsCorrect('wrong');
    }
  }

  const choiceStyle = () => {
    if (isCorrect === 'not selected') {
      return <div className={styles.choice} onClick={handleClick}> {CapsName} </div>
    } else if (isCorrect === 'correct') {
      return <div className={styles.correct} onClick={handleClick}> {CapsName} </div>
    } else {
      return <div className={styles.wrong} onClick={handleClick}> {CapsName} </div>
    }
  }

  return (
    // why is this working without curly brackets??
    choiceStyle()
  );
}

export default Choice;