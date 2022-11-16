import styles from '../styles/PokeImage.module.css';
import { Props } from '../pages/index'

const PokeImage = ({ pokemon }: Props) => {
  console.log(pokemon);
  return (
    <div className={styles.image}>image goes here</div>
  );
}

export default PokeImage;
