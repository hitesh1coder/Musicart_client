import React from "react";
import styles from "./Home.module.css";
import Banner from "../../Components/Banner/Banner";
import SearchBar from "../../Components/SeachBar/SearchBar";
import Features from "../../Components/FeatureSection/Features";
import AllProducts from "../../Components/Products/AllProduct";
import BannerImage from "../../Components/Banner/BannerImage";
import Header from "../../Components/Header/Header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner pageContent="" />
      <BannerImage />
      <SearchBar />
      <Features />
      <AllProducts />
    </div>
  );
};

export default Home;
