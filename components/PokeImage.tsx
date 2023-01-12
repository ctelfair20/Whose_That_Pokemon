import React from 'react'
import Image from 'next/image'
import { Pokemon } from '../pages'
import styles from '../styles/PokeImage.module.css'

interface Props {
  pokemonArray: Pokemon[]
  shouldBeVisible: boolean
}

const PokeImage = ({ pokemonArray, shouldBeVisible }: Props) => {

  const showOrNoShow = () => {
    // give image a state === shouldBeVisible
    // if that state is false
    if (!shouldBeVisible) {
      // show black version
      return (
        <div className={styles.silhouette}>
          <Image
            src={pokemonArray[0].sprites.other['official-artwork']['front_default']}
            alt='hidden pokemon'
            width={400}
            height={400}
          />
        </div>
      )
      // if that state is true
    } else {
      // show normal version
      return (
        <div className={styles.original}>
          <Image
            src={pokemonArray[0].sprites.other['official-artwork']['front_default']}
            alt='hidden pokemon'
            width={400}
            height={400}
          />
        </div>
      )
    }
  }

  return (
    showOrNoShow()
  );
}

export default PokeImage;
