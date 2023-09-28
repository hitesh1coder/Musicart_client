import React from "react";
import styles from "./Banner.module.css";
import bannerbackgroundImg from "/images/Rectangle 3.png";
import girl_img from "/images/image_5-removebg-preview 1.png";

const BannerImage = () => {
  return (
    <div className={styles.banner_Image_container}>
      <img
        className={styles.background_img}
        src={bannerbackgroundImg}
        alt="bannerbackgroundImg"
      />
      <p className={styles.banner_text}>
        Grab upto 50% off on Selected headphones
      </p>
      <button className={styles.banner_btn}>Buy Now</button>
      <img className={styles.girl_img} src={girl_img} alt="girl_img" />
    </div>
  );
};

export default BannerImage;
