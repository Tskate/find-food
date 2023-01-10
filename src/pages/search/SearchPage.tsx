import {FC} from "react";
import styles from './SearchPage.module.scss'
import SearchBar from "../../components/common/searchBar/SearchBar";
import FilterList from "../../components/filterList/FilterList";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";
import {useSelector} from "react-redux";

const SearchPage:FC = () => {
    const restaurants = useSelector((state: any) => state.restaurants.restaurants)
    return (
        <div className={styles.searchPage}>
            <SearchBar placeholder="Напишіть назву закладу" onClick={() => console.log('Click search')}/>
            <div className={styles.content}>
                <FilterList title={"Кухня"} options={[{id: 1, name: 'Європейська'}, {id: 2, name: 'Азіатська'}, {id: 3, name: 'Мексиканська'}]}/>
                <div className={styles.restaurantsList}>
                    {restaurants.map((restaurant:any) =>
                        <RestaurantCard
                            key={restaurant.id}
                            id={+restaurant.id}
                            name={restaurant.name.toString()}
                            photo={restaurant.photos[0]}
                            reviewAmount={restaurant.reviews.length}
                            description={restaurant.description.toString()}
                            address={restaurant.address}
                            type={restaurant.type.toString()}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default SearchPage