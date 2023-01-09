import {FC} from "react";
import styles from './SearchPage.module.scss'
import SearchBar from "../../components/common/searchBar/SearchBar";
import FilterList from "../../components/filterList/FilterList";
import RestaurantCard from "../../components/restaurantCard/RestaurantCard";

const SearchPage:FC = () => {
    return (
        <div className={styles.searchPage}>
            <SearchBar placeholder="Напишіть назву закладу" onClick={() => console.log('Click search')}/>
            <div className={styles.content}>
                <FilterList title={"Кухня"} options={[{id: 1, name: 'Європейська'}, {id: 2, name: 'Азіатська'}, {id: 3, name: 'Мексиканська'}]}/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

export default SearchPage