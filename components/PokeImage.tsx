import React, { useState } from 'react'
import Image from 'next/image'
import { Props } from '../pages/index'
import styles from '../styles/PokeImage.module.css'

const PokeImage = ({ pokemonArray }: Props) => {

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
