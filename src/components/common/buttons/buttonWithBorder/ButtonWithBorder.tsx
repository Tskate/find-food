import {FC} from "react";
import styles from './ButtonWithBorder.module.scss'

type ButtonWithBorderProps = {
    text: string,
    extraStyle?: object
    onClick?: () => void
}

const ButtonWithBorder:FC<ButtonWithBorderProps> = ({text, extraStyle, onClick}) => {
    return(
        <div
            className={styles.btn}
            style={extraStyle}
            onClick={onClick}
        >
            {text}
        </div>
    )
}

export default ButtonWithBorder