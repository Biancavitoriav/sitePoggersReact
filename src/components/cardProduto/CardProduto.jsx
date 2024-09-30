import styles from "./CardProduto.module.css"
import estrelas from "../../assets/estrelas.png"

 
const CardProduto = ({titulo, precoAtual, quantAvaliacao, fotocard}) => {
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
    </div>
    )
};
 
export default CardProduto;
 