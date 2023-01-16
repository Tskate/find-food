import {FC, useState} from "react";
import styles from './Header.module.scss'
import Logo from "./logo/Logo";
import MenuButton from "../common/buttons/menuButton/MenuButton";
import ButtonWithBorder from "../common/buttons/buttonWithBorder/ButtonWithBorder";
import ModalWindow from "../actionForm/ModalWindow";

const Header:FC = () => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const setFormState = () => {
        console.log('click')
        setIsFormVisible(!isFormVisible)
    }

    return(
        <div className={styles.header}>
            <MenuButton />
            <Logo />
            <ButtonWithBorder text='Sign In' onClick={setFormState}/>
            {isFormVisible ?  <ModalWindow closeWindow={setFormState}/> : null}
        </div>
    )
}

export default Header