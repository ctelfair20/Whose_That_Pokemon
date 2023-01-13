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
  test: boolean
  setTest: (test: boolean) => void
}

type Status = {
  wrong: number,
  right: number,
}

const Choice = ({ id, pokemon, pokemonArray, status, setStatus, isCorrect, setIsCorrect, test, setTest }: Props) => {
  const CapsName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // const [test, setTest] = useState(false);

  useEffect(() => {
    console.log('was choice comps re rendered?');
    console.log('test is F')
    if (test) {
      console.log('test is TRUE');
    }
  }, [test])


  const handleClick = () => {
    // when clicked, toggle border color if selected pokemon is correct
    if (pokemon.name === pokemonArray[0].name) {
      console.log('clicked right');
      // render a green border
      // create new obj that looks like isCorrect
      const newCorrect: isCorrectI = isCorrect;
      // change value of new obj at id to be 'correct'
      newCorrect[id] = "correct"
      // set isCorrect to new obj
      setIsCorrect({ ...newCorrect });
      // test to true
      setTest(true);
      // set status to right:1
      const newStatus = status;
      newStatus.right = 1;
      setStatus({ ...newStatus });
      // I want to auto populate a new pokemon after 3 seconds
    } else {
      console.log('cliccked wrong?');
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
    console.log('start');

    if (isCorrect[id] === 'correct' && test === true) {
      console.log('here?', pokemon.id);
      return <div className={styles.correct}> {CapsName} </div>
    } else if (isCorrect[id] === 'wrong' && test === true) {
      console.log('here??', pokemon.id);
      return <div className={styles.wrong}> {CapsName} </div>
    } else if (isCorrect[id] === 'not selected' && test === true) {
      console.log('here', pokemon.id);
      return <div className={styles.choice}> {CapsName} </div>
    } else if (isCorrect[id] === 'not selected') {
      console.log('there', pokemon.id);
      return <div className={styles.choice} onClick={handleClick}> {CapsName} </div>
    } else if (isCorrect[id] === 'correct') {
      console.log('there?', pokemon.id);
      return <div className={styles.correct}> {CapsName} </div>
    } else if (isCorrect[id] === 'wrong') {
      console.log('there??', pokemon.id);
      return <div className={styles.wrong}> {CapsName} </div>
    }
  }

  return (
    // why is this working without curly brackets??
    choiceStyle()
  );
}

export default Choice;