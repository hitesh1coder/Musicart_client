import React from "react";
import styles from "./Sidebar.module.css";
import productIcon from "/images/icons8-products-50.png";
import usersIcon from "/images/icons8-group-32.png";

const SideBar = ({ onSidebarListClick, selectedComponet }) => {
  return (
    <div className={styles.container}>
      <h1>Musicart DashBoard</h1>
      <div className={styles.tabList}>
        <span
          className={
            selectedComponet === "users"
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          onClick={() => onSidebarListClick("users")}
        >
          <span>
            <img src={usersIcon} alt="users" />
          </span>
          Users
        </span>
        <span
          className={
            selectedComponet === "products"
              ? `${styles.tab} ${styles.active}`
              : styles.tab
          }
          onClick={() => onSidebarListClick("products")}
        >
          <span>
            <img src={productIcon} alt="products" />
          </span>
          Products
        </span>
      </div>
      <p>*All Rights reserves to Admin</p>
    </div>
  );
};

export default SideBar;
