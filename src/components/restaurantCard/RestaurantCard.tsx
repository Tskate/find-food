import {FC} from "react";
import styles from './RestaurantCard.module.scss'
import img from '../../assets/exampleRest1.png'
import RestaurantInfoSection from "./restaurantInfoSection/RestaurantInfoSection";

const RestaurantCard:FC = () => {
    return (
        <div className={styles.cardContainer}>
           <div className={styles.upPart}>
               <div className={styles.picture}>
                   <img src={img} alt="restaurant-photo"/>
               </div>
               <div className={styles.description}>
                   <h3>AlexGut Grill</h3>
                   <p>
                       М'ясний ресторан "AlexGut Grill Pub"
                       зустрічає гостей на вулиці Кудряшова у Києві.
                       Родзинкою закладу вважається відкритий гриль
                       у залі.
                   </p>
               </div>
               <div className={styles.score}>
                    <p><span>5</span>/5</p>
               </div>
           </div>
           <RestaurantInfoSection/>
        </div>
    )
}

export default RestaurantCard