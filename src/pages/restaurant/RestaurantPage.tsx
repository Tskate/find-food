import React, {FC} from "react";
import styles from './RestaurantPage.module.scss'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {RestaurantType, TagType} from "../../types/restaurantType";
import Review from "../../components/review/Review";
import {ReviewType} from "../../types/reviewType";
import {calculateAverageGrade} from "../../services/calculateAverageGrade";
import {selectAllGrades} from "../../services/selectAllGrades";
import PhotoGallery from "../../components/gallery/PhotoGallery";
import RestaurantPageInfoSection from "../../components/restaurantPageInfoSection/RestaurantPageInfoSection";
import ReviewForm from "../../components/reviewForm/ReviewForm";
import Tag from "../../components/common/tag/Tag";

const RestaurantPage:FC = () => {
    const {id} = useParams()
    const restaurant = useSelector<any, any>((state) => {
        return state.restaurants.restaurants.find((item:RestaurantType) => item.id === Number(id))
        }
    )


    return(
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <h1 className={styles.restaurantName}>
                    {`${restaurant.type} ${restaurant.name}`}
                </h1>
                <div className={styles.score}>
                    <span>
                        {calculateAverageGrade(...selectAllGrades(restaurant.reviews))}
                    </span>/5
                </div>
            </div>
            <div className={styles.gallery}>
                <PhotoGallery photos={restaurant.photos}/>
                <RestaurantPageInfoSection address={restaurant.address} workingHours={restaurant.workingHours}/>
            </div>
            <div className={styles.description}>
                <h3>Опис</h3>
                <p>
                    {restaurant.description}
                </p>
            </div>
            <div className={styles.menu}>
                <h3>Меню</h3>
            </div>
            <div className={styles.features}>
                <h3>Особливості</h3>
                <ul>
                    {restaurant.tags.map((tag:TagType) => <Tag key={tag.id} title={tag.title}/>)}
                </ul>
            </div>
            <div className={styles.reviews}>
                <h3>Відгуки</h3>
                <div>
                    {restaurant.reviews.map((review:ReviewType) => <Review key={review.id} review={review}/>)}
                </div>
            </div>
            <ReviewForm/>
        </div>
    )
}

export default RestaurantPage