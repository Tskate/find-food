import {FC} from "react";
import styles from './ButtonWithLeftIcon.module.scss'

type ButtonWithLeftIconProps = {
    text?: string,
    icon: string,
    extraStylesContainer?: object,
    extraStylesIcon?:object
    onClick?: () => void
}
const ButtonWithLeftIcon:FC<ButtonWithLeftIconProps> = ({text, icon, onClick, extraStylesContainer, extraStylesIcon}) => {
    return(
        <div className={styles.container} style={extraStylesContainer} onClick={onClick}>
            <div className={styles.icon} style={extraStylesIcon}>
                <img src={icon} alt="icon"/>
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ButtonWithLeftIcon