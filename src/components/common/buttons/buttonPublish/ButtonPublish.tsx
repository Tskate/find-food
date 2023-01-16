import {FC} from "react";
import styles from './ButtonPublish.module.scss'
const buttonPublish:FC = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Опубліковати</p>
        </div>
    )
}

export default buttonPublish