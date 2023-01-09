import React, {FC, useState} from "react";
import styles from "./SearchBar.module.scss"
import icon from '../../../assets/icons/search-icon.svg'

type SearchBarProps = {
    placeholder?: string
    onClick: () => void
}
const SearchBar:FC<SearchBarProps> = ({placeholder, onClick}) => {
    const [value, setValue] = useState('')
    const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={styles.container}>
            <img src={icon} alt="search-icon"/>
            <input type="text" placeholder={placeholder} value={value} onChange={inputValue}/>
            <div className={styles.btn} onClick={onClick}>
                Знайти
            </div>
        </div>
    )
}

export default SearchBar