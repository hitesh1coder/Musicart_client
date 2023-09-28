import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

import cartIcon from "/images/icons8-cart-24.png";
import { fetchCartProducts } from "../../redux/Slices/cartSlice";
import logo from "/images/logo.png";

const Banner = ({ pageContent }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userId = user?.userid;

  const checkIsCartPageOrIsCheckoutPage = () => {
    if (pageContent === "ViewCart") {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (user && userId) {
      dispatch(fetchCartProducts(userId));
    }
  }, [dispatch, user]);

  return (
    <div className={styles.main_container}>
      <div className={styles.headSection}>
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h2>Musicart</h2>
          <p> Home / {pageContent}</p>
        </div>
        <div>
          {user && checkIsCartPageOrIsCheckoutPage() && (
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
