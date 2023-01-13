import {FC} from "react";
import styles from './RestaurantPage.module.scss'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {RestaurantType} from "../../types/restaurantType";
import {formAddress} from "../../services/formAddress";
import Review from "../../components/review/Review";
import {ReviewType} from "../../types/reviewType";
import {calculateAverageGrade} from "../../services/calculateAverageGrade";
import {selectAllGrades} from "../../services/selectAllGrades";
import PhotoGallery from "../../components/gallery/PhotoGallery";
import ButtonWithBorder from "../../components/common/buttons/buttonWithBorder/ButtonWithBorder";

const RestaurantPage:FC = () => {
    const {id} = useParams()
    const restaurant = useSelector<any, any>((state) => {
        return state.restaurants.restaurants.find((item:RestaurantType) => item.id == Number(id))
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
                <div className={styles.infoCard}>
                    <div className={styles.info}>
                        <h5>Адреса :</h5>
                        <p>{formAddress(restaurant.address)}</p>
                        <h5>Графік роботи :</h5>
                        <p>{restaurant.workingHours}</p>
                        <h5>Кухня :</h5>
                        <p>Європейська</p>
                    </div>
                    <div className={styles.phone}>

                    </div>
                    <div className={styles.actions}>
                        <ButtonWithBorder text={"Забронювати столик"}/>
                    </div>
                </div>
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
            <div className={styles.reviews}>
                <h3>Відгуки</h3>
                <div>
                    {restaurant.reviews.map((review:ReviewType) => <Review key={review.id} review={review}/>)}
                </div>
            </div>
        </div>
    )
}

export default RestaurantPage