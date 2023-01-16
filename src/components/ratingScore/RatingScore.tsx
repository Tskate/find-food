import React, {FC, useState} from "react";
import styles from './RatingScore.module.scss'
import starIcon from '../../assets/icons/star-icon.svg'
import starChosenIcon from '../../assets/icons/active/star-chosen-icon.svg'

type RatingScoreProps = {
    title: string
}
const RatingScore:FC<RatingScoreProps> = ({title}) => {
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)
    const [isHover, setIsHover] = useState(false)
    const onMouseEnter = (score:number) => {
        setIsHover(true)
        setHoverRating(score)
    }
    const onMouseLeave = () => {
        setIsHover(false)
        setHoverRating(0)
    }
    const onClick = (score:number) => {
        setRating(score)
    }

    const chooseIcon = (score: number) => {
        return score <= rating || score <= hoverRating ? starChosenIcon : starIcon
    }

    return (
        <div className={styles.container}>
            <h4>{title}:</h4>
            <div className={styles.scoreContainer} >
                {
                    [1,2,3,4,5].map(score =>
                        <div
                            key={score}
                            onClick={() => onClick(score)}
                            onMouseEnter={() => onMouseEnter(score)}
                            onMouseLeave={onMouseLeave}
                        >
                            <img src={chooseIcon(score)} alt="score-icon"/>
                        </div>)
                }
            </div>
        </div>
    )
}

export default RatingScore