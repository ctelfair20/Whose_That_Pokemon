import Image from "next/image";
import PokeImage from "./PokeImage";
import { Pokemon } from "../pages/index";
import ChoiceBox from "./ChoiceBox";
import styles from '../styles/Background.module.css';

export interface BackgroundProps {
  pokemonArray: Pokemon[]
  setPokemonArr: (mixedArray: Pokemon[]) => void
};

const BackgroundImage = ({ pokemonArray, setPokemonArr }: BackgroundProps) => {
  // console.log('pokeB', pokemonArray);
  return (
    // to decrease pixelation in remote images,  increase the height and width propertie
    <>
      <Image className={styles.background} src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2016/07/whos_that_pokemon.png?fit=1920%2C1080&ssl=1" alt="pokemon silluoette" width={800} height={800} priority />
      <PokeImage pokemonArray={pokemonArray} />
      <ChoiceBox pokemonArray={pokemonArray} setPokemonArr={setPokemonArr} />
    </>
  );
}

export default BackgroundImage;