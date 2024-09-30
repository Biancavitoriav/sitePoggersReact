import React from "react";
import styles from "./CardCategories.module.css";

const CardCategories = ({ titulo, fotocard, fotocardHover }) => {
    return (
        <div className={styles.container}>
            <div className={styles.div}>
                <img
                    src={fotocard}
                    alt={titulo}
                    className={styles.icone}
                />
            </div>
            <br />
            <h1 className={styles.titulo}>{titulo}</h1>
        </div>
    );
};

export default CardCategories;
