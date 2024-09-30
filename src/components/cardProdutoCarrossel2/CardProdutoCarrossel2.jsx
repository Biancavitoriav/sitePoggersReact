import styles from "./CardProdutoCarrossel2.module.css";
import Card from '../card/Card.jsx';
import fotoCasaco from "../../assets/fotoCasaco.png"
import fotoBolsa from "../../assets/fotoBolsa.png"
import fotoCPU from "../../assets/fotoCPU.png"
import fotoMesinha from "../../assets/fotoMesinha.png"


function CardProdutoCarrossel() {
  return (
    <>
      <div className={styles.containerFlex}>
        <Card img={fotoCasaco} titulo="HAVIT HV-G92 Gamepad" precoAtual="$120" precoAnterior="$150" quantAvaliacao="88" />
        <Card img={fotoBolsa} titulo="AK-900 Wired Keyboard" precoAtual="$960" precoAnterior="$1160" quantAvaliacao="75" />
        <Card img={fotoCPU}titulo="IPS LCD Gaming Monitor" precoAtual="$370" precoAnterior="$400" quantAvaliacao="99" />
        <Card img={fotoMesinha}titulo="S-Series Comfort Chair" precoAtual="$375" precoAnterior="$400" quantAvaliacao="99" />
      </div>
    </>
  );
}

export default CardProdutoCarrossel;
