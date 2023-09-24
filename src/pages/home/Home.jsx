import React, { useState } from "react";
import styles from "./Home.module.css";
import Banner from "../../Components/Banner/Banner";
import SearchBar from "../../Components/SeachBar/SearchBar";
import Features from "../../Components/FeatureSection/Features";
import AllProducts from "../../Components/Products/AllProduct";
import BannerImage from "../../Components/Banner/BannerImage";
import Header from "../../Components/Header/Header";
import SearchBarHeader from "../../MobileComponents/MobileHeader/SeachBarHeader";
import { useSelector } from "react-redux";
import MobileFooter from "../../MobileComponents/MobileFooter/MobileFooter";

const Home = () => {
  const [isListView, setIsListView] = useState(false);
  const { isMobile } = useSelector((state) => state.ui);
  return (
    <div className={styles.container}>
      {isMobile ? <SearchBarHeader /> : <Header />}
      {!isMobile && <Banner pageContent="" />}
      <BannerImage />
      {!isMobile && <SearchBar />}
      <Features isListView={isListView} setIsListView={setIsListView} />
      <AllProducts isListView={isListView} />
      {isMobile && <MobileFooter />}
    </div>
  );
};

export default Home;
