import React, { useEffect } from "react";
import styles from "./Allproducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Slices/productSlice";
import Card from "../ProductCard/Card";
import ListProduct from "../ListProduct/ListProduct";
import CardSkeltan from "../LodingSkeletan/CardSkeletan/CardSkeltan";
import ListSkeletan from "../LodingSkeletan/ListSkeletan/ListSkeletan";

const AllProducts = ({ isListView }) => {
  const { products, status, error } = useSelector((state) => state.products);
  const { isMobile } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8];

  if (status === "loading") {
    return (
      <div className={styles.container}>
        {skeletonCount?.map((_, i) =>
          isListView ? <ListSkeletan key={i} /> : <CardSkeltan key={i} />
        )}
      </div>
    );
  }

  if (status === "failed") {
    return <div className={styles.container}>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      {products?.length > 0 ? (
        products?.map((product) =>
          isListView && !isMobile ? (
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
