import React from "react";
import styles from "./Header.module.css";
import phoneIcon from "../../images/icons8-phone-80.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/Slices/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <header className={styles.container}>
      <div className={styles.contact}>
        <img src={phoneIcon} alt="phoneIcon" />
        912121131313
      </div>
      <div className={styles.btns}>
        <p>Get 50% off on selected items</p>
        <span> | </span>
        <p>Shop Now</p>
      </div>
      {user ? (
        <div className={styles.btns}>
          <p>Welcome {user.name}</p>
          <Link to="/login">
            <p onClick={() => dispatch(logoutUser())} className={styles.btn}>
              Logout
            </p>
          </Link>
        </div>
      ) : (
        <div className={styles.btns}>
          <Link to="/login">
            <p className={styles.btn}>Login</p>
          </Link>
          <span> | </span>
          <Link to="/signup">
            <p className={styles.btn}>Signup</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
