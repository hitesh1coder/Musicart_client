import React from "react";
import styles from "./MobileHeader.module.css";
import { SearchBar } from "../../Components/index";
import logo from "/images/musicartLogo.png";

const MobileHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_div}>
          <img className={styles.logo_img} src={logo} alt="logo" />
          {/* <SearchBar /> */}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
