import {FC} from "react";
import {RatingType} from "../../types/reviewType";
import styles from './ReviewRating.module.scss'

type ReviewRatingProps = {
    rating: RatingType
}
export const ReviewRating:FC<ReviewRatingProps> = ({rating}) => {
    return(
        <div className={styles.container}>
            <h4>
                Атмосфера : <span>{rating.atmosphere}</span>
            </h4>
            <h4>
                Смак : <span>{rating.taste}</span>
            </h4>
            <h4>
                Ціна : <span>{rating.price}</span>
            </h4>
        </div>
    )
}

export default ReviewRating