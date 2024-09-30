import styles from "./FotoPs5.module.css"
import foto from "./../../assets/fotops5.png"
import fotomulher from "./../../assets/fotomulher.png"
import fotoalexa from "./../../assets/fotoalexa.png"
import fotoperfume from "./../../assets/fotoperfume.png"
function FotoPs5() {
    return (
        <div className={styles.container}>
            <div className={styles.coluna1}><img src={foto} alt="fotps5" className={styles.fotops5}/></div>
            <div className={styles.coluna2}>
                <img src={fotomulher} alt="foto colecao mulher" className={styles.fotomulher} />
                <div className={styles.fotoalexa}>
                    <img src={fotoalexa} alt="foto alexa" />
                    <img src={fotoperfume} alt="foto perfume" />
                </div>
            </div>
        </div>
    );
}
export default FotoPs5