import {FC, useState} from "react";
import styles from './ModalWindow.module.scss'
import ActionSelectionBlock from "./actionSelectionBlock/ActionSelectionBlock";
import SingInBlock from "./signInBlock/SingInBlock";
import SignUpForm from "./signUpForm/SignUpForm";
import Footer from "./footer/Footer";
import Header from "./header/Header";

type ModalWindowProps = {
    closeWindow: () => void
}

const ModalWindow:FC<ModalWindowProps> = ({closeWindow}) => {
    const [isSignUpSelected, setIsSignUpSelected] = useState(false)
    const [isSignInSelected, setIsSignInSelected] = useState(false)

    const signInClick = () => {
        setIsSignInSelected(true)
        if(isSignUpSelected) {
            setIsSignUpSelected(true)
        }
    }
    const signUpClick = () => {
        setIsSignUpSelected(true)
    }
    const renderContent = () => {
        return isSignInSelected ?
            <SingInBlock onSignUpClick={signUpClick}/> :
            <ActionSelectionBlock onSignInClick={signInClick} onSignUpClick={signUpClick}/>
    }

    if (isSignUpSelected) {
        return <SignUpForm closeWindow={closeWindow}/>
    }

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Header title="Авторизація" closeWindow={closeWindow}/>
                {renderContent()}
                <Footer/>
            </div>
        </div>
    )
}

export default ModalWindow