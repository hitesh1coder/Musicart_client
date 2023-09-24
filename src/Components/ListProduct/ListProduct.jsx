import React from "react";
import styles from "./ListProduct.module.css";

import cartIcon from "../../images/icons8-add-shopping-cart-24.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";

const ListProduct = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const userId = user?.userid;

  const handleAddToCart = () => {
    dispatch(addToCart({ userId, product, quantity: 1 }));
  };
  return (
    <div className={styles.productList_container}>
      <div className={styles.product_image_div}>
        <img
          loading="lazy"
          src={product?.images[0]}
          alt={product?.title}
          className={styles.productImage}
        />
        {user && (
          <img
            onClick={handleAddToCart}
            className={styles.cartIcon}
            src={cartIcon}
            alt="cartIcon"
          />
        )}
      </div>
      <div className={styles.product_desc}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productPrice}> Price : ₹ {product.price}</p>
        <p className={styles.product_details}>{product.description}</p>
        <span>{product?.color}</span>
        <span> | </span>
        <span>{product?.type}</span>
        <Link to={`/${product._id}`}>
          {" "}
          <button className={styles.detail_btn}>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ListProduct;
