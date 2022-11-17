import { Pokemon } from '../pages/index'
import styles from '../styles/Choice.module.css'

type Props = {
  pokemon: Pokemon
}
const Choice = ({ pokemon }: Props) => {
  return (
    <div className={styles.choice}>
      {pokemon.name}
    </div>
  );
}

export default Choice;