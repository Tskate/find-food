import {FC} from "react";
import styles from './Review.module.scss'
import {ReviewType} from "../../types/reviewType";
import {formDate} from "../../services/formDate";
import ReviewRating from "./ReviewRating";

type ReviewProps = {
    review: ReviewType


}
const Review:FC<ReviewProps> = ({review}) => {

    formDate(review.date)
    return(
        <div className={styles.reviewContainer}>
            <div className={styles.header}>
                <h5>{review.userId}</h5>
                <p>{formDate(review.date)}</p>
            </div>
            <div className={styles.body}>
                <p>{review.text}</p>
            </div>
            <div className={styles.line}></div>
            <ReviewRating rating={review.rating}/>
        </div>
    )
}

export default Review