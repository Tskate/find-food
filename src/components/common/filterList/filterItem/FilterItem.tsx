import {FC} from "react";
import styles from './FilterItem.module.scss'

type FilterItemProps = {
    title: string
}
const FilterItem: FC<FilterItemProps> = ({title}) => {
    return (
        <div className={styles.filterItem}>
            <input type="checkbox"/>
            <label>{title}</label>
        </div>
    )
}

export default FilterItem