import React, { useState } from "react";
import styles from "./DashBoard.module.css";
import SideBar from "../../Components/SideBar/SideBar";
import AllUsers from "../../Components/AllUsers/AllUsers";
import { Header } from "../../../Components";
import Products from "../../Components/AllProducts/Products";

const DashBoard = () => {
  const [selectedComponet, setSelectedComponet] = useState("users");

  const handleSidebarItemClick = (component) => {
    setSelectedComponet(component);
  };
  return (
    <>
      <div className={styles.container}>
        <Header />
        <SideBar
          onSidebarListClick={handleSidebarItemClick}
          selectedComponet={selectedComponet}
        />
        <div className={styles.content}>
          {selectedComponet === "users" && <AllUsers />}
          {selectedComponet === "products" && <Products />}
        </div>
      </div>
      {/* <SideBar /> */}
    </>
  );
};

export default DashBoard;
