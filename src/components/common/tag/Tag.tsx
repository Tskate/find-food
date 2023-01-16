import {FC} from "react";
import styles from './Tag.module.scss'
import icon from '../../../assets/icons/tick-icon.svg'

type TagProps = {
    title: string
}
const Tag:FC<TagProps> = ({title}) => {
    return(
        <div className={styles.tagContainer}>
            <div>
                <img src={icon} alt="icon"/>
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default Tag