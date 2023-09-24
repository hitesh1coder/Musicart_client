import React, { useState } from "react";
import styles from "./Feature.module.css";
import gridIcon from "../../images/icons8-grid-30.png";
import listIcon from "../../images/icons8-list-50.png";
import debounce from "../../utils/debounce";
import { filterProducts, sortProducts } from "../../redux/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

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
  }, 200);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    const newFilters = { ...filters, [name]: value };
    debouncedFunction(newFilters);
  };
  const handleSortChange = (e) => {
    const value = e.target.value;

    let newConfig;
    switch (value) {
      case "price-lowest":
        newConfig = { sortBy: "price", order: "asc" };
        break;
      case "price-highest":
        newConfig = { sortBy: "price", order: "desc" };
        break;
      case "title-a-z":
        newConfig = { sortBy: "title", order: "asc" };
        break;
      case "title-z-a":
        newConfig = { sortBy: "title", order: "desc" };
        break;
      default:
        newConfig = { sortBy: "title", order: "asc" };
    }

    setSort(newConfig);
    dispatch(sortProducts(newConfig));
  };

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.view_options}>
          <img
            style={{ backgroundColor: isListView ? "" : "#c5c5c5" }}
            onClick={() => setIsListView(false)}
            src={gridIcon}
            alt="gridIcon"
          />
          <img
            style={{
              backgroundColor: isListView ? "#c5c5c5" : "",
            }}
            src={listIcon}
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
            <option value="jbl">Jbl</option>
            <option value="sony">Sony</option>
            <option value="boat">Boat</option>
            <option value="zebronics">Zebronics</option>
            <option value="marshall">Marshall</option>
            <option value="ptron">Ptron</option>
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
          value={`${sort.sortBy}-${sort.order}`}
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
