import {FC} from "react";
import styles from "./Header.module.scss";
import ButtonWithLeftIcon from "../../common/buttons/buttonWithLeftIcon/ButtonWithLeftIcon";
import icon from "../../../assets/icons/close-icon.svg";

type HeaderProps = {
    title?: string,
    closeWindow: () => void
}
const Header:FC<HeaderProps> = ({title,closeWindow}) => {
    return (
        <div className={styles.header}>
            <h2>{title}</h2>
            <ButtonWithLeftIcon
                icon={icon}
                extraStylesIcon={{width: '24px', height: '24px'}}
                onClick={closeWindow}
            />
        </div>
    )
}

export default Header;