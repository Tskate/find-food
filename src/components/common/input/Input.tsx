import {FC} from "react";
import styles from './Input.module.scss'
import {InputTypes} from "../../../types/enums";

type InputTypeProps = {
    label?: string,
    type: InputTypes
}


const Input:FC<InputTypeProps> = ({label, type}) => {
    return(
        <div className={styles.container}>
            <label className={styles.title} htmlFor='.input'>
                {label}
            </label>
            <input type={type} className={styles.input}/>
        </div>
    )
}

export default Input