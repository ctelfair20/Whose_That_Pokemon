import { Props } from '../pages/index'
import Choice from './Choice';

const ChoiceBox = ({ pokemonArray }: Props) => {

  const allChoices = pokemonArray.map((pokemon) => {
    return pokemon.name;
  });

  return (
    <div>
      {allChoices}
    </div>
  );
}

export default ChoiceBox;