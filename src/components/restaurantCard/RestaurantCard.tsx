import {FC} from "react";
import styles from './RestaurantCard.module.scss'
import img from '../../assets/exampleRest1.png'
import RestaurantInfoSection from "./restaurantInfoSection/RestaurantInfoSection";
import {AddressType} from "../../types/restaurantType";
import {ReviewType} from "../../types/reviewType";
import {Link} from "react-router-dom";
import {selectAllGrades} from "../../services/selectAllGrades";
import {calculateAverageGrade} from "../../services/calculateAverageGrade";

type RestaurantCardProps = {
    id: number,
    name: string,
    type: string,
    reviews: ReviewType[],
    address: AddressType,
    description: string,
    photo: any,
}
const RestaurantCard:FC<RestaurantCardProps> = ({id, name, address, type, reviews, description, photo}) => {

    return (
        <div className={styles.cardContainer}>
           <div className={styles.upPart}>
               <div className={styles.picture}>
                   <img src={photo.link} alt="restaurant-photo"/>
               </div>
               <div className={styles.description}>
                   <Link to={`/search/${id}`} className={styles.link}>
                       <h3>{name}</h3>
                   </Link>
                   <p>
                       {description}
                   </p>
               </div>
               <div className={styles.score}>
                    <p>
                        <span>
                            {calculateAverageGrade(...selectAllGrades(reviews))}
                        </span>/5
                    </p>
               </div>
           </div>
           <RestaurantInfoSection type={type} address={address} reviewAmount={reviews.length}/>
        </div>
    )
}

export default RestaurantCard