import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Feature.module.css";

import { filterProducts, sortProducts } from "../../redux/Slices/productSlice";
import debounce from "../../utils/debounce";

import gridIcon from "/images/icons8-grid-50.png";
import gridIcon2 from "/images/icons8-grid-30.png";
import listIcon from "/images/icons8-list-100.png";
import listIcon2 from "/images/icons8-list-64.png";

const Features = ({ isListView, setIsListView }) => {
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state) => state.ui);
  const [filters, setFilters] = useState({
    type: "",
    brand: "",
    color: "",
    priceRange: "",
  });

  const [sort, setSort] = useState({ sortBy: "title", order: "asc" });
  const debouncedFunction = debounce((data) => {
    dispatch(filterProducts(data));
  }, 1000);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    const updatedFilters = { ...filters, [name]: value };
    debouncedFunction(updatedFilters);
  };
  const handleSortChange = (e) => {
    const value = e.target.value;

    const sortOptions = {
      "price-lowest": { sortBy: "price", order: "asc" },
      "price-highest": { sortBy: "price", order: "desc" },
      "title-a-z": { sortBy: "title", order: "asc" },
      "title-z-a": { sortBy: "title", order: "desc" },
    };

    const newConfig = sortOptions[value] || { sortBy: "title", order: "asc" };

    setSort(value);
    dispatch(sortProducts(newConfig));
  };

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.view_options}>
          <img
            onClick={() => setIsListView(false)}
            src={isListView ? gridIcon : gridIcon2}
            alt="gridIcon"
          />
          <img
            src={isListView ? listIcon2 : listIcon}
            alt="listIcon"
            onClick={() => setIsListView(true)}
          />
        </div>
      )}
      <div className={styles.filters_options}>
        <div className={styles.select_type}>
          <select
            className={styles.select_filter}
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">Headphone Type</option>
            <option value="in-ear headphone">in-ear headphone</option>
            <option value="on-ear headphone">on-ear headphone</option>
            <option value="over-ear headphone">over-ear headphone</option>
          </select>
          <select
            className={styles.select_filter}
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">Company</option>
            <option value="JBL">JBL</option>
            <option value="SONY">SONY</option>
            <option value="boAt">boAt</option>
            <option value="ZEBRONICS">ZEBRONICS</option>
            <option value="Marshall">Marshall</option>
            <option value="PTron">PTron</option>
          </select>
          <select
            className={styles.select_filter}
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
          >
            <option value="">color</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
          <select
            className={styles.select_filter}
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            <option value="">Price</option>
            <option value="0-1000">₹0 - ₹1000</option>
            <option value="1000-10000">₹1000 - ₹10000</option>
            <option value="10000-20000">₹10000 - ₹20000</option>
            <option value="20000-100000">Above ₹20000</option>
          </select>
        </div>
      </div>
      <div className={styles.sort_options}>
        <select
          className={styles.select_sort}
          value={sort}
          onChange={handleSortChange}
        >
          <option value="">Sort by : Featured</option>
          <option value="price-lowest">Price : Lowest</option>
          <option value="price-highest">Price : Highest</option>
          <option value="title-a-z">Name : A-Z</option>
          <option value="title-z-a">Name : Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Features;
