import {FC} from "react";
import styles from './Review.module.scss'

type ReviewProps = {
    username: string,
    text: string,
    date: Date,


}
const Review:FC<ReviewProps> = ({username, text, date}) => {
    return(
        <div className={styles.reviewContainer}>
            <div className={styles.header}>
                <h5>{username}</h5>
                <p>{date.toISOString()}</p>
            </div>
            <div className={styles.body}>
                {text}
            </div>
            <div className={styles.footer}>

            </div>
        </div>
    )
}

export default Review