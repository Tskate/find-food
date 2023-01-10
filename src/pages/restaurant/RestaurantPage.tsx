import {FC} from "react";
import styles from './RestaurantPage.module.scss'

type RestaurantPageProps = {
    restaurantName: string,

}
const RestaurantPage:FC = () => {
    return(
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <h1 className={styles.restaurantName}>
                    Ресторан “AlexGut Grill”
                </h1>
                <div className={styles.score}><span>5</span>/5</div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.infoCard}>
                    <div>
                        <h5>Адреса :</h5>
                        <p>м. Київ, вулиця Шота Руставелі 13</p>
                        <h5>Графік роботи :</h5>
                        <p>10:00 - 23:00</p>
                        <h5>Кухня :</h5>
                        <p>Європейська</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Опис</h3>
                <p>
                    М'ясний ресторан "AlexGut Grill Pub" зустрічає гостей на вулиці Кудряшова у Києві.
                    Родзинкою закладу вважається відкритий гриль у залі. Гостей пригощають популярними
                    стравами європейської кухнію Основну увагу кухарі приділяють м'ясним стравам,
                    приготованим на мангалі.
                </p>
            </div>
            <div className={styles.menu}>
                <h3>Меню</h3>
            </div>
            <div className={styles.review}>
                <h3>Відгуки</h3>
            </div>
        </div>
    )
}

export default RestaurantPage