import { Pokemon } from '../pages/index'


type Props = {
  pokemon: Pokemon
}
const Choice = ({ pokemon }: Props) => {
  return (
    <div>
      {pokemon.name}
    </div>
  );
}

export default Choice;