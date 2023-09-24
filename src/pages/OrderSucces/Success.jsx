import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.css";
import logo from "../../images/logo.png";
import success from "../../images/confetti 1.png";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/Slices/cartSlice";
import MobileAuthHeader from "../../MobileComponents/MobileHeader/MobileAuthHeader";

const Success = () => {
  const { user } = useSelector((state) => state.auth);
  const userId = user?.userid;
  const { isMobile } = useSelector((state) => state.ui);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCart(userId));
  }, [dispatch]);
  return (
    <div className={styles.main_container}>
      {isMobile ? (
        <MobileAuthHeader />
      ) : (
        <div className={styles.logo_container}>
          <img src={logo} alt="logo" />
          <h2>Musicart</h2>
        </div>
      )}
      <div className={styles.success_container}>
        <img src={success} alt="SuccessLogo" />
        <h2>Order is placed successfully!</h2>
        <p>You will be receiving a confirmation email with order details</p>
        <Link to="/">
          <button className={styles.back_btn}>Go Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
