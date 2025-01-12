import styles from "./SearchBar.module.css";
const SearchBar = ({ notify, onSearch }) => {
  const checkInputValue = (event) => {
    event.preventDefault();
    if (event.target.search.value.trim() === "") {
      return notify();
    }
    console.log(event.target.search.value);
    return onSearch(event.target.search.value);
  };
  return (
    <header>
      <form onSubmit={checkInputValue}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
