import React from "react";
import styles from "./Card.module.css";
import productImg from "../../images/product.jpg";
import cartIcon from "../../images/icons8-add-shopping-cart-24.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Slices/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.product_image_div}>
        <img
          src={productImg}
          alt={product.title}
          className={styles.productImage}
        />
        <img
          onClick={handleAddToCart}
          className={styles.cartIcon}
          src={cartIcon}
          alt="cartIcon"
        />
      </div>
      <Link to={`/${product.id}`}>
        <div className={styles.product_desc}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <p className={styles.productPrice}> Price : ₹ {product.price}</p>
          <span>Blue</span>
          <span> | </span>
          <span>On-ear headphone </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
