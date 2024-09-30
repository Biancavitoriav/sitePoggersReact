import CardService from "./../cardServices/CardServices.jsx"
import style from "./CardServiceCarrossel.module.css"
import fotoCaminhao from "./../../assets/iconCaminhao.png";
import fotoBrasao from "./../../assets/fotoBrasao.png"; 
import fotoFone from "./../../assets/fotoFone.png"


function CardServiceCarrossel() {
  return (
    <>
      <div className={style.containerFlex}>
          <CardService titulo="FREE AND FAST DELIVERY" paragrafo="Free delivery for all orders over $140" icon={fotoCaminhao}/>
          <CardService titulo="24/7 CUSTOMER SERVICE" paragrafo="Friendly 24/7 customer support"icon={fotoFone}/>
          <CardService titulo="MONEY BACK GUARANTEE" paragrafo="We reurn money within 30 days" icon={fotoBrasao}/>
      </div>
    </>
  );
}

export default CardServiceCarrossel;