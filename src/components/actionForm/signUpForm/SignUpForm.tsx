import React, {FC} from "react";
import styles from './SignUpForm.module.scss'
import Input from "../../common/input/Input";
import {InputTypes} from "../../../types/enums";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ButtonWithBorder from "../../common/buttons/buttonWithBorder/ButtonWithBorder";

type SignUpFormProps = {
    closeWindow: () => void
}
const SignUpForm:FC<SignUpFormProps> = ({closeWindow}) => {
    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <Header closeWindow={closeWindow} title="Реєстрація"/>
                <div className={styles.inputSection}>
                    <Input type={InputTypes.TEXT} label="*Ім'я"/>
                    <Input type={InputTypes.TEXT} label="*Тип користувача"/>
                </div>
                <div className={styles.inputSection}>
                    <Input type={InputTypes.EMAIL} label="*Email"/>
                    <Input type={InputTypes.PHONE} label="*Номер телефону"/>
                </div>
                <div className={styles.inputSection}>
                    <Input type={InputTypes.PASSWORD} label="*Пароль"/>
                    <Input type={InputTypes.PASSWORD} label="*Повторіть пароль"/>
                </div>
                <div className={styles.button}>
                    <ButtonWithBorder text="Увійти" extraStyle={{border: '2px solid #5BBC0F', backgroundColor: '#5BBC0F', color:'#FFFFFF'}}/>
                </div>
                <Footer/>

            </div>
        </div>
    )
}

export default SignUpForm