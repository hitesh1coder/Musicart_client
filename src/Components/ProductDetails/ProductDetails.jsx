import React, { useEffect } from "react";
import styles from "./ProductDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  resetSingleProduct,
} from "../../redux/Slices/singleProductSlice";
import { Link, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct.product);
  const status = useSelector((state) => state.singleProduct.status);
  const error = useSelector((state) => state.singleProduct.error);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    return () => {
      dispatch(resetSingleProduct());
    };
  }, [dispatch, productId]);

  // if (status === "loading") return <div>Loading...</div>;
  // if (status === "failed") return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <Banner pageContent={product?.title} />
      <div div className={styles.container}>
        <Link to="/">
          <button className={styles.back_btn}>Back to products</button>
        </Link>
        {product ? (
          <>
            <div className={styles.product_container}>
              <p className={styles.about_product}>
                {product.title} is {product.description}
              </p>
              <div className={styles.product_details}>
                <div className={styles.product_img}>
                  <img src={product.images[0]} alt={product.title} />
                </div>
                <div className={styles.product_desc}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <div className={styles.reviews}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>50 Customer reviews</span>
                  </div>
                  <h2 className={styles.productPrice}>
                    Price - ₹ {product.price}
                  </h2>
                  <div>
                    <span>Blue</span>
                    <span> | </span>
                    <span>On-ear headphone </span>
                  </div>
                  <p className={styles.product_info}>About this Item</p>
                  <ul>
                    <li className={styles.product_info_list}>
                      * {product.description}
                    </li>
                    <li className={styles.product_info_list}>
                      * {product.description}
                    </li>
                    <li className={styles.product_info_list}>
                      * {product.description}
                    </li>
                  </ul>
                  <div className={styles.product_available}>
                    <h3>Available - </h3> <span> In Stock</span>
                  </div>
                  <div className={styles.product_available}>
                    <h3>Brand - </h3> <span> {product.brand}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.product_footer}>
              <div className={styles.product_other_images}>
                <div className={styles.other_images_container}>
                  <img src={product.images[1]} alt={product.title} />
                </div>
                <div className={styles.other_images_container}>
                  <img src={product.images[2]} alt={product.title} />
                </div>
                <div className={styles.other_images_container}>
                  <img src={product.images[3]} alt={product.title} />
                </div>
              </div>
              <div className={styles.product_btns}>
                <button className={styles.cart_btn}>Add to Cart</button>
                <button className={styles.buy_btn}>Buy Now</button>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
