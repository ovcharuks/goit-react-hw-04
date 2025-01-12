import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";
import { ClimbingBoxLoader } from "react-spinners";

const ImageModal = ({ photo, onClose }) => (
  <ReactModal isOpen onRequestClose={onClose} ariaHideApp={false}>
    <div>
      <img
        className={styles.fullImage}
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
      <p className={styles.text}>{photo.alt_description}</p>
      <p className={styles.text}>{photo.user.name}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </ReactModal>
);

export default ImageModal;
