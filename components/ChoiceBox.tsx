import { Props } from '../pages/index'
import stlyes from '../styles/Choice.module.css'
import Choice from './Choice';

const ChoiceBox = ({ pokemonArray }: Props) => {

  const allChoices = pokemonArray.map((pokemon) => {
    return <Choice key={pokemon.id} pokemon={pokemon} />
  });

  return (
    <div className={stlyes['choice-box']}>
      {allChoices}
    </div>
  );
}

export default ChoiceBox;