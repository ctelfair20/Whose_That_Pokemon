import React from 'react'
import { Pokemon } from '../pages/index'
import { isCorrectI } from './ChoiceBox'
import styles from '../styles/Choice.module.css'

type Props = {
  id: number
  pokemon: Pokemon
  pokemonArray: Pokemon[]
  status: Status,
  setStatus: (previStat: Status) => void
  isCorrect: isCorrectI
  setIsCorrect: (update: isCorrectI) => void
  gameOver: boolean
}

type Status = {
  wrong: number,
  right: number,
}

const Choice = ({ id, pokemon, pokemonArray, status, setStatus, isCorrect, setIsCorrect, gameOver }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const handleClick = () => {
    // when clicked, toggle border color if selected pokemon is correct
    if (pokemon.name === pokemonArray[0].name) {
      // render a green border
      updateCorrect('correct')
      // set status to right:1
      updateStatus('right')
      // I want to auto populate a new pokemon after 3 seconds
    } else {
      // render a red border
      updateCorrect('wrong')
      // set status to wrong + 1
      updateStatus('wrong')
    }
  }

  const updateCorrect = (grade: 'correct' | 'wrong') => {
    const newCorrect: isCorrectI = isCorrect;
    // change value of new obj at id to be 'correct'
    newCorrect[id] = grade;
    // set isCorrect to new obj
    setIsCorrect({ ...newCorrect });
  }

  const updateStatus = (grade: 'right' | 'wrong') => {
    const newStatus: Status = status;
    newStatus[grade] += 1;
    setStatus({ ...newStatus });
  }

  const choiceStyle = () => {

    if (isCorrect[id] === 'correct' && gameOver === true) {
      return <div className={styles.correct}> {CapsName} </div>

    } else if (isCorrect[id] === 'wrong' && gameOver === true) {
      return <div className={styles.wrong}> {CapsName} </div>

    } else if (isCorrect[id] === 'not selected' && gameOver === true) {
      return <div className={styles.choice}> {CapsName} </div>

    } else if (isCorrect[id] === 'not selected') {
      return <div className={styles.choice} onClick={handleClick}> {CapsName} </div>

    } else if (isCorrect[id] === 'wrong') {
      return <div className={styles.wrong}> {CapsName} </div>
    }
  }

  return (
    // why is this working without curly brackets??
    choiceStyle()
  );
}

export default Choice;