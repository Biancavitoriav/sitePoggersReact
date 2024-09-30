import styles from "./CardProdutoInlineCarrossel.module.css";
import CardProduto from '../cardProduto/CardProduto.jsx';
import fotoRacao from "../../assets/fotoCardRacao.png"
import fotoCamera from "../../assets/fotoCamera.png"
import fotoLaptop from "../../assets/fotoLaptop.png"
import fotoCreme from "../../assets/fotoCreme.png"


function CardProdutoInlineCarrossel() {
  return (
    <>
      <div className={styles.containerFlex}>
        <CardProduto titulo="HAVIT HV-G92 Gamepad" precoAtual="$120"quantAvaliacao="88" fotocard={fotoRacao}/>
        <CardProduto titulo="CANON EOS DSLR Camera" precoAtual="$360"quantAvaliacao="95" fotocard={fotoCamera}/>
        <CardProduto titulo="ASUS FHD Gaming Laptop" precoAtual="$700"quantAvaliacao="325" fotocard={fotoLaptop}/>
        <CardProduto titulo="Curology Product Set " precoAtual="$500"quantAvaliacao="145" fotocard={fotoCreme}/>


      </div>
    </>
  );
}

export default CardProdutoInlineCarrossel;
