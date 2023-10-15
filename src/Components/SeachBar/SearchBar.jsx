import React from "react";
import { useDispatch } from "react-redux";

import styles from "./SearchBar.module.css";
import { searchProducts } from "../../redux/Slices/productSlice";
import debounce from "../../utils/debounce";
import searchIcon from "/images/icons8-search-30.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debouncedSearch = debounce((newSearch) => {
    dispatch(searchProducts(newSearch));
  }, 500);

  const handleSearch = (e) => {
    let search = e.target.value;
    debouncedSearch(search);
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search Products"
        className={styles.search_input}
        onChange={handleSearch}
      />
      <img className={styles.search_icon} src={searchIcon} alt="searchIcon" />
    </div>
  );
};

export default SearchBar;
