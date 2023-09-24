import React, { useEffect } from "react";
import styles from "./Allproducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Slices/productSlice";
import Card from "../ProductCard/Card";
import ListProduct from "../ListProduct/ListProduct";

const AllProducts = ({ isListView }) => {
  const { products, status, error } = useSelector((state) => state.products);

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
            <ListProduct key={product._id} product={product} />
          ) : (
            <Card key={product._id} product={product} />
          )
        )
      ) : (
        <h3>No Result Found ...</h3>
      )}
    </div>
  );
};

export default AllProducts;
