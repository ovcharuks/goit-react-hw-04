import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onPhotoClick }) => {
  const length = photos.length;
  console.log(length);

  return (
    <ul className={styles.imageList}>
      {photos.map((photo) => (
        <li key={photo.id} className={styles.card}>
          <ImageCard photo={photo} onClick={() => onPhotoClick(photo)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
