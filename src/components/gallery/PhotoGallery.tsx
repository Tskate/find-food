import {FC} from "react";
import styles from './PhotoGallery.module.scss'
import {PhotoType} from "../../types/restaurantType";

type PhotoGalleryProps = {
    photos: PhotoType[]
}
const PhotoGallery:FC<PhotoGalleryProps> = ({photos}) => {
    return(
        <div className={styles.galleryContainer}>
            <div className={styles.photo}>
                <img src={photos[0].link} alt={'restaurant-photo'}></img>
            </div>
            <div className={styles.photo}>
                <img src={photos[1].link} alt={'restaurant-photo'}></img>
            </div>
            <div className={styles.photo}>
                <img src={photos[2].link} alt={'restaurant-photo'}></img>
            </div>
        </div>
    )
}

export default PhotoGallery