import {FC} from "react";
import styles from './RestaurantCard.module.scss'
import img from '../../assets/exampleRest1.png'
import RestaurantInfoSection from "./restaurantInfoSection/RestaurantInfoSection";
import {AddressType} from "../../types/restaurantType";
import {ReviewType} from "../../types/reviewType";

type RestaurantCardProps = {
    id: number,
    name: string,
    type: string,
    reviewAmount: number,
    address: AddressType,
    description: string,
    photo: any,
}
const RestaurantCard:FC<RestaurantCardProps> = ({id, name, address, type, reviewAmount, description, photo}) => {

    return (
        <div className={styles.cardContainer}>
           <div className={styles.upPart}>
               <div className={styles.picture}>
                   <img src={photo.link} alt="restaurant-photo"/>
               </div>
               <div className={styles.description}>
                   <h3>{name}</h3>
                   <p>
                       {description}
                   </p>
               </div>
               <div className={styles.score}>
                    <p><span>5</span>/5</p>
               </div>
           </div>
           <RestaurantInfoSection type={type} address={address} reviewAmount={reviewAmount}/>
        </div>
    )
}

export default RestaurantCard