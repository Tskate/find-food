import {FC} from "react";
import styles from './RestaurantInfoSection.module.scss'
import reviewIcon from '../../../assets/icons/review-icon.svg'
import bookingIcon from '../../../assets/icons/menu-book-icon.svg'
import locationIcon from '../../../assets/icons/location-icon.svg'
import favoriteIcon from '../../../assets/icons/favourite-icon.svg'

const RestaurantInfoSection:FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.type}>
                Ресторан
            </div>
            <div className={styles.review}>
                    <img src={reviewIcon} alt="review-icon"/>
                    <p className={styles.title}>
                        Відгуки (<span></span>)
                    </p>
            </div>
            <div className={styles.booking}>
                <img src={bookingIcon} alt="booking-icon"/>
                <p className={styles.title}>
                    Замовити столик
                </p>
            </div>
            <div className={styles.location}>
                <img src={locationIcon} alt="location-icon"/>
                <p className={styles.title}>
                    Київ, вул. Сагайдачного 10/5
                </p>
            </div>
            <div className={styles.favourite}>
                <img src={favoriteIcon} alt="favorite-icon"/>
            </div>
        </div>
    )
}
export default RestaurantInfoSection