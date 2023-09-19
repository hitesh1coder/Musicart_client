import React from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.css";
import logo from "../../images/logo.png";
import success from "../../images/confetti 1.png";

const Success = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" />
        <h2>Musicart</h2>
      </div>
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
