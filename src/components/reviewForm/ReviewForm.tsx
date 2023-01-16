import {FC} from "react";
import styles from './ReviewForm.module.scss'
import RatingScore from "../ratingScore/RatingScore";
import ButtonPublish from "../common/buttons/buttonPublish/ButtonPublish";
const ReviewForm:FC = () => {
    return (
        <div className={styles.container}>
            <h3>Залишити відгук</h3>
            <form className={styles.form}>
                <textarea className={styles.textArea}/>
                <div className={styles.ratingSection}>
                    <RatingScore title="Атмосфера"/>
                    <RatingScore title="Смак"/>
                    <RatingScore title="Ціна"/>
                </div>
                <ButtonPublish/>
            </form>
        </div>
    )
}

export default ReviewForm