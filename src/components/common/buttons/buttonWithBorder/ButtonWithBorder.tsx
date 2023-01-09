import {FC} from "react";
import styles from './ButtonWithBorder.module.scss'

type ButtonWithBorderProps = {
    text: string,
    extraStyle?: object
}

const ButtonWithBorder:FC<ButtonWithBorderProps> = ({text, extraStyle}) => {
    return(
        <div className={styles.btn} style={extraStyle}>
            {text}
        </div>
    )
}

export default ButtonWithBorder