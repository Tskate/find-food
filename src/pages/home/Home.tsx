import {FC} from "react";
import styles from './Home.module.scss'
import background from '../../assets/background4.jpg'
import arrow from '../../assets/icons/Arrow.svg'
import {Link} from "react-router-dom";

const Home:FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <img src={background}/>
            </div>
            <div className={styles.title}>
                <h1 className={styles.text}>Find the</h1>
                <h1 className={styles.text}>restaurant</h1>
                <h1 className={styles.text}>of your dream.</h1>
                <Link to="search" className={styles.link}>
                    <div className={styles.search}>
                        <span>search</span>
                        <img src={arrow}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home