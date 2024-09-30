import styles from "./CardCarrossel.module.css";
import fotophone from '../../assets/iconPhone.png';
import fotophonebranco from "../../assets/IconPhoneBranco.png";
import fotocomputer from '../../assets/iconComputer.png';
import fotosmartWatch from '../../assets/iconSmartWatch.png';
import fotocamera from '../../assets/iconCamera.png';
import fotoHeadPhone from '../../assets/iconHeadPhone.png';
import fotoGaming from '../../assets/iconGaming.png';
import CardCategories from '../../components/cardCategories/CardCategories.jsx';

function CardCarrossel() {
  return (
    <>
      <div className={styles.containerFlex}>
          <CardCategories titulo="phone" fotocard={fotophone}  fotocardHover={fotophonebranco}/>
          <CardCategories titulo="Computers" fotocard={fotocomputer}  fotocardHover={fotophonebranco}/>
          <CardCategories titulo="SmartWatch" fotocard={fotosmartWatch}  fotocardHover={fotophonebranco}/>
          <CardCategories titulo="Camera" fotocard={fotocamera}  fotocardHover={fotophonebranco}/>
          <CardCategories titulo="HeadPhones" fotocard={fotoHeadPhone}  fotocardHover={fotophonebranco}/>
          <CardCategories titulo="Gaming" fotocard={fotoGaming}  fotocardHover={fotophonebranco}/>

      </div>
    </>
  );
}

export default CardCarrossel;