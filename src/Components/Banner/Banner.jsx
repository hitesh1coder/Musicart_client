import React from "react";
import styles from "./Banner.module.css";
import logo from "../../images/logo.png";

import cartIcon from "../../images/icons8-cart-24.png";
import { Link } from "react-router-dom";

const Banner = ({ pageContent }) => {
  const checkIsCartPageOrIsCheckoutPage = () => {
    if (pageContent === "ViewCart" || pageContent === "Checkout") {
      return false;
    }
    return true;
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.headSection}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h2>Musicart</h2>
          <p> Home / {pageContent}</p>
        </div>
        <div>
          {checkIsCartPageOrIsCheckoutPage() && (
            <Link to="/cart">
              <button className={styles.viewCart_btn}>
                <img src={cartIcon} alt="cartIcon" />
                View Cart
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
