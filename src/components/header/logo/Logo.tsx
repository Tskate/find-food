import {FC} from "react";
import styles from './Logo.module.scss'

const Logo:FC = () => {
    return(
        <div className={styles.container}>
            <h3 className={styles.title}>
                FindFood
            </h3>
            <p className={styles.subtitle}>
                the place where you will find the best restaurant for yourself
            </p>
        </div>
    )
}

export default Logo