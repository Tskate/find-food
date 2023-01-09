import {FC} from "react";
import styles from './Header.module.scss'
import Logo from "./logo/Logo";
import MenuButton from "../common/buttons/menuButton/MenuButton";
import ButtonWithBorder from "../common/buttons/buttonWithBorder/ButtonWithBorder";

const Header:FC = () => {
    return(
        <div className={styles.header}>
            <MenuButton />
            <Logo />
            <ButtonWithBorder text='Sign In' />
        </div>
    )
}

export default Header