import {FC} from "react";
import styles from './MenuButton.module.scss'

const MenuButton:FC = () => {
    return (
        <div className={styles.btn}>
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
        </div>
    )
}

export default MenuButton