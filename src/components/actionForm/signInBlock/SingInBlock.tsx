import React, {FC} from "react";
import styles from './SignInBlock.module.scss'
import Input from "../../common/input/Input";
import {InputTypes} from "../../../types/enums";
import ButtonWithBorder from "../../common/buttons/buttonWithBorder/ButtonWithBorder";

type SingInBlockProps = {
    onSignUpClick: () => void
}
const SingInBlock:FC<SingInBlockProps> = ({onSignUpClick}) => {
    return(
        <div className={styles.container}>
            <div className={styles.inputBlock}>
                <Input type={InputTypes.TEXT} label={'*Email/Номер телефону'}/>
                <Input type={InputTypes.PASSWORD} label={'*Пароль'}/>
            </div>
            <div className={styles.buttonsBlock}>
                <ButtonWithBorder
                    text="Я не маю акаунту"
                    onClick={onSignUpClick}
                    extraStyle={{border: '2px solid #5BBC0F', color: '#5BBC0F'}}
                />
                <ButtonWithBorder text="Увійти" extraStyle={{border: '2px solid #5BBC0F', backgroundColor: '#5BBC0F', color:'#FFFFFF'}}/>
            </div>
        </div>
    )
}

export default SingInBlock