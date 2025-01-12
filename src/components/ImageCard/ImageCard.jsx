import styles from "./ImageCard.module.css";
const ImageCard = ({ photo, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={styles.photoBox}>
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          className={photo}
        />
        <div className={styles.cardDescription}>Athor: {photo.user.name}</div>
      </div>
    </>
  );
};
export default ImageCard;
