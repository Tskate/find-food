import {FC} from "react";
import styles from './RestaurantInfoSection.module.scss'
import reviewIcon from '../../../assets/icons/review-icon.svg'
import bookingIcon from '../../../assets/icons/menu-book-icon.svg'
import locationIcon from '../../../assets/icons/location-icon.svg'
import favoriteIcon from '../../../assets/icons/favourite-icon.svg'
import {AddressType} from "../../../types/restaurantType";
import {formAddress} from "../../../services/formAddress";

type RestaurantInfoSectionType = {
    type: string,
    reviewAmount: number,
    address: AddressType
}
const RestaurantInfoSection:FC<RestaurantInfoSectionType> = ({type, reviewAmount, address}) => {


    return(
        <div className={styles.container}>
            <div className={styles.type}>
                {type}
            </div>
            <div className={styles.review}>
                    <img src={reviewIcon} alt="review-icon"/>
                    <p className={styles.title}>
                        Відгуки (<span>{reviewAmount}</span>)
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
                    {formAddress(address)}
                </p>
            </div>
            <div className={styles.favourite}>
                <img src={favoriteIcon} alt="favorite-icon"/>
            </div>
        </div>
    )
}
export default RestaurantInfoSection