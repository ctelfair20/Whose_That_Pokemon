import React, { useState } from "react";
import Image from "next/image";
import PokeImage from "./PokeImage";
import { Pokemon } from "../pages/index";
import ChoiceBox from "./ChoiceBox";
import styles from "../styles/Background.module.css";
import Timer from "./Timer";

export interface BackgroundProps {
  pokemonArray: Pokemon[]
  setPokemonArr: (pokemonArray: Pokemon[]) => void
};

export type isCorrectI = {
  [id: number]: string
};

export type Status = {
  wrong: number
  right: number
};

const BackgroundImage = ({ pokemonArray, setPokemonArr }: BackgroundProps) => {

  const [shouldBeVisible, setShouldBeVisible] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState('');
  const [status, setStatus] = useState<Status>(
    {
      wrong: 0,
      right: 0
    }
  )
  const [isCorrect, setIsCorrect] = useState<isCorrectI>(
    {
      1: "not selected",
      2: "not selected",
      3: "not selected",
      4: "not selected"
    }
  );

  return (
    // to decrease pixelation in remote images, increase the height and width properties
    <>
      <Timer
        gameOver={gameOver}
        setPokemonArray={setPokemonArr}
        setIsCorrect={setIsCorrect}
        setGameOver={setGameOver}
        setShouldBeVisible={setShouldBeVisible}
        setStatus={setStatus}
        isWinner={isWinner}
      />
      <Image
        className={styles.background}
        src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?fit=1920%2C1080&ssl=1"
        alt="pokemon silluoette"
        width={800}
        height={800}
        priority
      />
      <PokeImage
        pokemonArray={pokemonArray}
        shouldBeVisible={shouldBeVisible}
      />
      <ChoiceBox
        pokemonArray={pokemonArray}
        setShouldBeVisible={setShouldBeVisible}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        status={status}
        setStatus={setStatus}
        gameOver={gameOver}
        setGameOver={setGameOver}
        setIsWinner={setIsWinner}
      />
    </>
  );
}

export default BackgroundImage;
