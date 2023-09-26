import React from "react";
import styles from "./MobileHeader.module.css";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";
const MobileAuthHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_div}>
          <img src={logo} alt="logo" />
          <h3>Musicart</h3>
        </div>
      </div>
    </>
  );
};

export default MobileAuthHeader;
