import {FC} from "react";
import styles from "./ActionSelectionBlock.module.scss";
import ButtonWithBorder from "../../common/buttons/buttonWithBorder/ButtonWithBorder";

type ActionSelectedBlockProps = {
    onSignInClick: () => void,
    onSignUpClick: () => void
}
const ActionSelectionBlock:FC<ActionSelectedBlockProps> = ({onSignInClick, onSignUpClick}) => {
    return (
        <div className={styles.buttonsContainer}>
            <ButtonWithBorder
                text="Зареєструватися"
                onClick={onSignUpClick}
                extraStyle={{border: '2px solid #5BBC0F', color: '#5BBC0F'}}
            />
            <p>Або</p>
            <ButtonWithBorder
                text="Увійти"
                onClick={onSignInClick}
                extraStyle={{border: '2px solid #5BBC0F', backgroundColor: '#5BBC0F', color:'#FFFFFF'}}
            />
        </div>
    )
}

export default ActionSelectionBlock