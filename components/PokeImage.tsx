import axios from 'axios';
import styles from '../styles/PokeImage.module.css';

const PokeImage = () => {
  return (
    <div className={styles.image}>image goes here</div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get a pokemon.
  // You can use any data fetching library
  const res = await axios('https://pokeapi.co/api/v2/pokemon/ditto')
  // const pokemon = await res.json();

  // By returning { props: { pokemon } }, the Blog component
  // will receive `pokemon` as a prop at build time
  return {
    props: {
      pokemon,
    },
    //   }
    // }

    export default PokeImage;