import styles from "./CardServices.module.css";

function CardServices({titulo, paragrafo, icon}) {
  return (
    <>
      <div className={styles.container}>
        <img src={icon} alt={icon} className={styles.icone}/>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.paragrafo}>{paragrafo}</p>
      </div>
    </>
  );
}

export default CardServices;
