import styles from "./CardSelectColor.module.css"
import estrelas from "./../../assets/estrelas.png"
 
const CardSelectColor = ({titulo, precoAtual, quantAvaliacao, fotocard}) => {
    return (
    <div className={styles.container}>
        <img src={fotocard} alt="fotocard" />
        <h1 className={styles.titulo}>{titulo}</h1>
        <div className={styles.precos}>
            <p className={styles.precoAtual}>{precoAtual}</p>
        
        </div>
    <div className={styles.avaliacao}>
        <img src={estrelas} alt="estrelas avaliacao" />
        <p className={styles.quantAvaliacao}>({quantAvaliacao})</p>
        </div>
        <br />
        <div className={styles.bolas}>
            <div className={styles.bola2borda}>
                <div className={styles.bola2}></div>
            </div>
            <div className={styles.bola}></div>
        </div>
    </div>
    )
};
 
export default CardSelectColor;
 