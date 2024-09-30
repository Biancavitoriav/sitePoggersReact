import React from "react"
import styles from "./Botao.module.css"
 
const Botao = ({conteudo}) => {
    return (
    <button type="button" className={styles.botao}>{conteudo}</button>
    )
};
 
export default Botao;
 