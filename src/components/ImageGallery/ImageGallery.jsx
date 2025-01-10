import styles from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";


const ImageGallery = ({photos}) => {

const length = photos.length;
console.log(length);

    return(
          <ul className={styles.imageList}>
	
	{photos.map(photo=> <li key={photo.id}>
		
        <ImageCard photo={photo}/>
      
	</li>)}
</ul>
      )
}

export default ImageGallery;