import Image from "next/image";
import styles from "../styles/WireFrame.module.css";


const Silluoette = () => {
  return (
    <Image className={styles.image} src="https://external-preview.redd.it/e5zoQw-hgw-LCjdhC_4G8IAcHxex5pzda_BD_FPTcBY.png?auto=webp&s=c0b96b5ec20010a15864b8a0c9b202c119e52fe8" alt="pokemon silluoette" width={100} height={100} />
  );
}

export default Silluoette;