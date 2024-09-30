import styles from "./CardProdutoCarrossel.module.css";
import Card from '../card/Card.jsx';
import fotoTeclado from "../../assets/fotoTeclado.png"
import fotoControle from "../../assets/fotocard.png"
import fotoMonitor from "../../assets/fotoMonitor.png"
import fotoCadeira from "../../assets/fotoCadeira.png"




function CardProdutoCarrossel() {
  return (
    <>
      <div className={styles.containerFlex}>
        <Card img={fotoControle} titulo="HAVIT HV-G92 Gamepad" precoAtual="$120" precoAnterior="$150" quantAvaliacao="88" />
        <Card img={fotoTeclado} titulo="AK-900 Wired Keyboard" precoAtual="$960" precoAnterior="$1160" quantAvaliacao="75" />
        <Card img={fotoMonitor}titulo="IPS LCD Gaming Monitor" precoAtual="$370" precoAnterior="$400" quantAvaliacao="99" />
        <Card img={fotoCadeira}titulo="S-Series Comfort Chair" precoAtual="$375" precoAnterior="$400" quantAvaliacao="99" />
      </div>
    </>
  );
}

export default CardProdutoCarrossel;
