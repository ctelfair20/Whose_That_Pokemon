import { Props } from '../pages/index'
import stlyes from '../styles/Choice.module.css'
import Choice from './Choice';


const ChoiceBox = ({ pokemonArray }: Props) => {

  const allChoices = (start: number, end = 4) => {
    return pokemonArray.map((pokemon, i) => {
      if (i >= start && i < end) {
        return <Choice key={pokemon.id} pokemonArray={pokemonArray} pokemon={pokemon} />
      }
    });
  }

  return (
    <div className={stlyes['choices-box']}>
      <div>
        {allChoices(0, 2)}
      </div>
      <div>
        {allChoices(2)}
      </div>
    </div>
  );
}

export default ChoiceBox;