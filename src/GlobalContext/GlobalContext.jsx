import React, { createContext, useContext, useState, useEffect } from "react";

const Product = createContext();

const Context = ({ children }) => {
  const [isListView, setIsListView] = useState(false);
  const [headphoneType, setHeadphoneType] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [sort, setSort] = useState("");
  return (
    <Product.Provider
      value={{
        isListView,
        setIsListView,
        headphoneType,
        setHeadphoneType,
        company,
        setCompany,
        color,
        setColor,
        price,
        setPrice,
        sort,
        setSort,
      }}
    >
      {children}
    </Product.Provider>
  );
};
export const productContext = () => {
  return useContext(Product);
};

export default Context;
