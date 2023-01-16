import styles from "./RestaurantPageInoSection.module.scss";
import {formAddress} from "../../services/formAddress";
import ButtonWithLeftIcon from "../common/buttons/buttonWithLeftIcon/ButtonWithLeftIcon";
import reviewIcon from "../../assets/icons/review-icon.svg";
import favoriteIcon from "../../assets/icons/favourite-icon.svg";
import ButtonWithBorder from "../common/buttons/buttonWithBorder/ButtonWithBorder";
import {FC} from "react";
import {AddressType} from "../../types/restaurantType";

type RestaurantPageInfoSectionProps = {
    address: AddressType,
    workingHours: string,
    phone?: string
}
const RestaurantPageInfoSection:FC<RestaurantPageInfoSectionProps> = ({address, workingHours}) => {
    return(
        <div className={styles.infoCard}>
            <div className={styles.info}>
                <h5>Адреса :</h5>
                <p>{formAddress(address)}</p>
                <h5>Графік роботи :</h5>
                <p>{workingHours}</p>
                <h5>Кухня :</h5>
                <p>Європейська</p>
            </div>
            <div className={styles.phone}>
                <div>
                    <img src="" alt=""/>
                </div>
                <p></p>
            </div>
            <div className={styles.actions}>
                <div className={styles.actionSection}>
                    <ButtonWithLeftIcon icon={reviewIcon} text="Залишити відгук"/>
                    <ButtonWithLeftIcon icon={favoriteIcon} text="Обране"/>
                </div>
                <ButtonWithBorder text={"Забронювати столик"}/>
            </div>
        </div>
    )
}

export default RestaurantPageInfoSection