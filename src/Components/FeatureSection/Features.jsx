import React, { useState } from "react";
import styles from "./Feature.module.css";
import gridIcon from "../../images/icons8-grid-30.png";
import listIcon from "../../images/icons8-list-50.png";

const Features = () => {
  const [headphoneType, setHeadphoneType] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.view_options}>
        <img src={gridIcon} alt="gridIcon" />
        <img style={{ width: "1.5rem" }} src={listIcon} alt="listIcon" />
      </div>
      <div className={styles.filters_options}>
        <div className={styles.select_type}>
          <select
            className={styles.select_filter}
            value={headphoneType}
            onChange={(e) => setHeadphoneType(e.target.value)}
          >
            <option value="">Headphone Type</option>
            <option value="in_ear_headphone">in-ear headphone</option>
            <option value="on_ear_headphone">on ear headphone</option>
            <option value="over_ear_headphone">over ear headphone</option>
          </select>
          <select
            className={styles.select_filter}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">color</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
          <select
            className={styles.select_filter}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Price</option>
            <option value="0-1000">₹0 - ₹1000</option>
            <option value="1000-10000">₹1000 - ₹10000</option>
            <option value="10000-20000">₹10000 - ₹20000</option>
          </select>
        </div>
      </div>
      <div className={styles.sort_options}>
        <select
          className={styles.select_sort}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by : Featured</option>
          <option value="lowest">Price : Lowest</option>
          <option value="highest">Price : Highest</option>
          <option value="a-z">Name : A-Z</option>
          <option value="z-a">Name : Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default Features;
