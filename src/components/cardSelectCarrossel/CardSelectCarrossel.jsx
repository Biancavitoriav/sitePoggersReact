import styles from "./CardSelectCarrossel.molude.css";
import CardSelect from "./../cardSelectColor/CardSelectColor.jsx"
import fotoCarro from "./../../assets/fotoCardCarro.png"
import fotoChuteira from "./../../assets/fotoChuteira.png"
import fotoControle from "./../../assets/fotoControleXbox.png"
import fotoCasaco from "./../../assets/fotoCasacoVerde.png"

function CardSelectCarrossel() {
  return (
      <div className={styles.containerFlex}>
        <CardSelect titulo="HAVIT HV-G92 Gamepad" precoAtual="$120"quantAvaliacao="88" fotocard={fotoCarro}/>
        <CardSelect titulo="Jr. Zoom Soccer Cleats" precoAtual="$1160"quantAvaliacao="35" fotocard={fotoChuteira}/>
        <CardSelect titulo="GP11 Shooter USB Gamepad" precoAtual="$660"quantAvaliacao="55" fotocard={fotoControle}/>
        <CardSelect titulo="Quilted Satin Jacket" precoAtual="$660"quantAvaliacao="55" fotocard={fotoCasaco}/>
      </div>
  );
}

export default CardSelectCarrossel;
