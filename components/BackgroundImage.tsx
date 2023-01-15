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

const BackgroundImage = ({ pokemonArray, setPokemonArr }: BackgroundProps) => {

  const [shouldBeVisible, setShouldBeVisible] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  return (
    // to decrease pixelation in remote images, increase the height and width properties
    <>
      <Timer gameOver={gameOver} setPokemonArray={setPokemonArr} setGameOver={setGameOver} />
      <Image className={styles.background} src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?fit=1920%2C1080&ssl=1" alt="pokemon silluoette" width={800} height={800} priority />
      <PokeImage pokemonArray={pokemonArray} shouldBeVisible={shouldBeVisible} />
      <ChoiceBox pokemonArray={pokemonArray} setShouldBeVisible={setShouldBeVisible} gameOver={gameOver} setGameOver={setGameOver} />
    </>
  );
}

export default BackgroundImage;
