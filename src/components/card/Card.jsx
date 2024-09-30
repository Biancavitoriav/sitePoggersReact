import React from "react"
import styles from "./Card.module.css"
import fotocard from "../../assets/fotocard.png"
import estrelas from "../../assets/estrelas.png"


 
const Card = ({img, titulo, precoAtual, precoAnterior, quantAvaliacao}) => {
    return (
    <div className={styles.container}>
        <img src={img} alt="fotocard" />
        <h1 className={styles.titulo}>{titulo}</h1>
        <div className={styles.precos}>
            <p className={styles.precoAtual}>{precoAtual}</p>
            <p className={styles.precoAnterior}>{precoAnterior}</p>
        </div>
        <br />
    <div className={styles.avaliacao}>
        <img src={estrelas} alt="estrelas avaliacao" />
        <p className={styles.quantAvaliacao}>({quantAvaliacao})</p>
        </div>
    </div>
    )
};
 
export default Card;
 