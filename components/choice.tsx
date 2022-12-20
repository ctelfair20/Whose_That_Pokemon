import { useEffect, useState } from 'react'
import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
  pokemonArray: Pokemon[]
  status: Status,
  setStatus: (previStat: Status) => void
}

type Status = {
  wrong: number,
  right: number,
}

const Choice = ({ pokemon, pokemonArray, status, setStatus }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const [isCorrect, setIsCorrect] = useState('not selected');

  useEffect(() => {
    if (status.wrong === 3) {
      console.log('I got three wrong!')
      //   show pokemon
      //   fetch 4 more pokemon after 2-3 seconds
    }
    if (status.right === 1) {
      console.log('I got it right!')
      //   show pokemon
      //   fetch 4 more pokemon after 2-3 seconds
    }
  }, [status])

  const handleClick = () => {
    // when clicked, toggle border color if selected pokemon is correct
    if (pokemon.name === pokemonArray[0].name) {
      // render a green border
      setIsCorrect('correct');
      // I want to auto populate a new pokemon after 3 seconds
    } else {
      // render a red border
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