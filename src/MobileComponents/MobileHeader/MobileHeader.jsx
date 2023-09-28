import React from "react";
import styles from "./MobileHeader.module.css";
import { SearchBar } from "../../Components/index";

const MobileHeader = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.logo_div}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
