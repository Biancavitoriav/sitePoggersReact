import styles from "./Promo.module.css"
// import seta from "./../../assets/Vector.png"

function Promo() {
    return (
        <div className={styles.fundo}>
            <p>
                Summer Sale For All Swin Suits And Free Express Delivery - OFF 50%!
                <a href="">Shop Now</a>
            </p>
            <div className={styles.container}>
                <select className={styles.dropdown} name="" id="">
                    <option value="eng">English</option>
                    <option value="pt-br">Portuguese</option>
                </select>
            </div>
        </div>
    );
}
export default Promo