import {FC} from "react";
import styles from './FilterList.module.scss'
import FilterItem from "./filterItem/FilterItem";

type FilterListProps = {
    title: string,
    options: any[]
}
const FilterList:FC<FilterListProps> = ({title, options}) => {
    return(
        <div className={styles.filterSection}>
            <h4 className={styles.filterTitle}>{title}</h4>
            <ul className={styles.filterList}>
                {options.map((option) => <FilterItem key={option.id} title={option.name}/>)}
            </ul>
        </div>
    )
}

export default FilterList