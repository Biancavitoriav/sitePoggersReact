import styles from "./Hero.module.css";

function Hero({ hero }) {
  return (
    <>
      <div className={styles.fundo}><img src={hero} alt="imagem" className={styles.hero}></img></div>
    </>
  );
}

export default Hero;