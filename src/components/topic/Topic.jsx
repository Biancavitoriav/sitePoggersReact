import React from "react"
import styles from "./Topic.module.css"
import horario from "./../../assets/horario.png" 
const Topic = ({titulo, titulo2}) => {
    return (
    <div>
        <div className={styles.container}>
            <div className={styles.retangulo}>. </div>
            <h2 className={styles.titulo}>{titulo}s</h2>
        </div>
        <br />
        <div className={styles.container2}>
            <h1 className={styles.titulo2}>{titulo2}</h1>
        </div>
    </div>
    )
};
 
export default Topic;
 