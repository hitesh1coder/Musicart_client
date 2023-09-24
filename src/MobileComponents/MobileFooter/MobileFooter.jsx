import React, { useState } from "react";
import styles from "./MobileFooter.module.css";
import homeIcon from "../../images/icons8-home-50.png";
import cartIcon from "../../images/cartIcon.png";
import userIcon from "../../images/icons8-user-50.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/Slices/authSlice";

const MobileFooter = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenulick = (item) => {
    setActiveMenu(item);
  };

  const gotToCart = () => {
    if (user) {
      navigate("/cart");
    } else {
      alert("please Login first");
    }
  };

  return (
    <div className={styles.mobile_footer_container}>
      <Link to="/">
        <div
          className={`${styles.btn} ${
            activeMenu === "home" ? `${styles.active}` : ""
          }`}
        >
          <img src={homeIcon} alt="homeIcon" />
          <p>Home</p>
        </div>
      </Link>

      <div
        onClick={() => {
          gotToCart();
          handleMenulick("cart");
        }}
        className={`${styles.btn} ${
          activeMenu === "cart" ? `${styles.active}` : ""
        }`}
      >
        <img src={cartIcon} alt="cartIcon" />
        <p>Cart</p>
      </div>

      <Link to="/login">
        <div
          onClick={() => {
            handleMenulick("user");
          }}
          className={`${styles.btn} ${
            activeMenu === "user" ? `${styles.active}` : ""
          }`}
        >
          <img
            onClick={() => {
              dispatch(logoutUser());

              handleMenulick("user");
            }}
            src={userIcon}
            alt="userIcon"
          />
          {user ? <p>Logout</p> : <p>Login</p>}
        </div>
      </Link>
    </div>
  );
};

export default MobileFooter;
