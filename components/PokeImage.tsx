import styles from '../styles/PokeImage.module.css';
import { Props } from '../pages/index'

const PokeImage = ({ pokemon }: Props) => {

  return (
    <div className={styles.image}>image goes here</div>
  );
}

export default PokeImage;
