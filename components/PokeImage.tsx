import Image from 'next/image'
import { Props } from '../pages/index'
import styles from '../styles/PokeImage.module.css'

const PokeImage = ({ pokemonArray }: Props) => {
  // console.log('poke', pokemonArray[1]);
  return (
    <div className={styles.image}>
      <Image
        src={pokemonArray[0].sprites.other['official-artwork']['front_default']}
        alt='hidden pokemon'
        width={400}
        height={400}
      />
    </div>
  );
}

export default PokeImage;
