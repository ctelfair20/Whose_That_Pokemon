import Image from 'next/image'
import { Props } from '../pages/index'
import styles from '../styles/PokeImage.module.css'

const PokeImage = ({ pokemon }: Props) => {
  // console.log('poke', pokemon.sprites.other['official-artwork']);
  return (
    <div className={styles.image}>
      <Image
        src={pokemon.sprites.other['official-artwork']['front_default']}
        alt='hidden pokemon'
        width={100}
        height={100}
      />
    </div>
  );
}

export default PokeImage;
