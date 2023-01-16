import {FC} from "react";
import styles from "./Footer.module.scss";

const Footer:FC = () => {
    return(
        <p className={styles.info}>
            Авторизуючись на FindFood.ua,
            ви погоджуєтесь з нашими <span>умовами
            використання сервісу</span> та <span>політикою приватності</span>.
        </p>
    )
}

export default Footer