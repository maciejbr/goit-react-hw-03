import { useId } from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, handleFilterChange }) => {
  const searchFieldId = useId();
  return (
    <>
      <h2>Search:</h2>
      <div className={styles.form}>
        <label htmlFor={searchFieldId}></label>
        Find contacts by name
        <input
          type="text"
          onChange={handleFilterChange}
          value={value}
          id={searchFieldId}
        />
      </div>
    </>
  );
};

export default SearchBox;
