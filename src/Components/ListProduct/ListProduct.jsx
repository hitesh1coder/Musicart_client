import React from "react";
import styles from "./ListProduct.module.css";
import productImg from "../../images/product.jpg";
import cartIcon from "../../images/icons8-add-shopping-cart-24.png";
import { Link } from "react-router-dom";

const ListProduct = ({ product }) => {
  return (
    <div className={styles.productList_container}>
      <div className={styles.product_image_div}>
        <img
          src={productImg}
          alt={product.title}
          className={styles.productImage}
        />
        <img className={styles.cartIcon} src={cartIcon} alt="cartIcon" />
      </div>
      <div className={styles.product_desc}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.productPrice}> Price : ₹ {product.price}</p>
        <p className={styles.product_details}>{product.description}</p>
        <span>Blue</span>
        <span> | </span>
        <span>On-ear headphone </span>
        <Link to={`/${product.id}`}>
          {" "}
          <button className={styles.detail_btn}>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ListProduct;
