import {FC} from "react";
import styles from './SearchPage.module.scss'
import SearchBar from "../../components/common/searchBar/SearchBar";
import FilterList from "../../components/common/filterList/FilterList";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import {useSelector} from "react-redux";
import {RestaurantType} from "../../types/restaurantType";

const SearchPage:FC = () => {
    const restaurants = useSelector((state: any) => state.restaurants.restaurants)
    return (
        <div className={styles.searchPage}>
            <SearchBar placeholder="Напишіть назву закладу" onClick={() => console.log('Click search')}/>
            <div className={styles.content}>
                <FilterList title={"Кухня"} options={[{id: 1, name: 'Європейська'}, {id: 2, name: 'Азіатська'}, {id: 3, name: 'Мексиканська'}]}/>
                <div className={styles.restaurantsList}>
                    {restaurants.map((restaurant:RestaurantType) =>
                        <RestaurantCard
                            key={restaurant.id}
                            id={+restaurant.id}
                            name={restaurant.name}
                            photo={restaurant.photos[0]}
                            reviews={restaurant.reviews}
                            description={restaurant.description}
                            address={restaurant.address}
                            type={restaurant.type}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default SearchPage