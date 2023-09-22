import React, { useEffect } from "react";
import styles from "./Allproducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Slices/productSlice";
import axios from "axios";
import Card from "../ProductCard/Card";
import ListProduct from "../ListProduct/ListProduct";
import { productContext } from "../../GlobalContext/GlobalContext";

const AllProducts = () => {
  const { isListView, setIsListView } = productContext();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {products?.length > 0 ? (
        products?.map((product) =>
          isListView ? (
            <Card key={product._id} product={product} />
          ) : (
            <ListProduct key={product._id} product={product} />
          )
        )
      ) : (
        <h3>No Result Found ...</h3>
      )}
    </div>
  );
};

export default AllProducts;
