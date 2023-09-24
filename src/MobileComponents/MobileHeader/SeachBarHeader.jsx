import React from "react";
import styles from "./MobileHeader.module.css";
import SeachBar from "../../Components/SeachBar/SearchBar";

const SeachBarHeader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo_div}>
          <SeachBar />
        </div>
      </div>
    </>
  );
};

export default SeachBarHeader;
