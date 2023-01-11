import React, { useEffect, useState } from 'react'
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
}

type Status = {
  wrong: number,
  right: number,
}

const Choice = ({ id, pokemon, pokemonArray, status, setStatus, isCorrect, setIsCorrect }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  const handleClick = () => {
    // when clicked, toggle border color if selected pokemon is correct
    if (pokemon.name === pokemonArray[0].name) {
      // render a green border
      // create new obj that looks like isCorrect
      const newCorrect: isCorrectI = isCorrect;
      // change value of new obj at id to be 'correct'
      newCorrect[id] = "correct"
      // set isCorrect to new obj
      setIsCorrect({ ...newCorrect });
      // set status to right:1
      const newStatus = status;
      newStatus.right = 1;
      setStatus({ ...newStatus });
      // I want to auto populate a new pokemon after 3 seconds
    } else {
      // render a red border
      // create new obj that looks like isCorrect
      const newCorrect: isCorrectI = isCorrect;
      // change value of new obj at id to be 'correct'
      newCorrect[id] = "wrong"
      // set isCorrect to new obj
      setIsCorrect({ ...newCorrect });
      // set status to wrong + 1
      const newStatus: Status = status;
      newStatus.wrong += 1;
      setStatus({ ...newStatus });
    }
  }

  const choiceStyle = () => {
    if (isCorrect[id] === 'not selected') {
      return <div className={styles.choice} onClick={handleClick}> {CapsName} </div>
    } else if (isCorrect[id] === 'correct') {
      return <div className={styles.correct}> {CapsName} </div>
    } else {
      return <div className={styles.wrong}> {CapsName} </div>
    }
  }

  return (
    // why is this working without curly brackets??
    choiceStyle()
  );
}

export default Choice;