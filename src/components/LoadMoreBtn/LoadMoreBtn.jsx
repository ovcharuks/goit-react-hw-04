import styles from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onNextPage }) => {
  return (
    <button onClick={onNextPage} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
