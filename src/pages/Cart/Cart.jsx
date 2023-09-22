import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCartProducts,
  getCartTotal,
  updateCartQuantity,
} from "../../redux/Slices/cartSlice";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, totalAmount, totalCount } = useSelector(
    (state) => state.cart
  );
  const { user } = useSelector((state) => state.auth);
  const userId = user?.userid;
  const dispatch = useDispatch();

  const handleQuantityChange = ({ e, productId }) => {
    dispatch(getCartTotal());
    let quantity = parseInt(e.target.value);
    dispatch(updateCartQuantity({ quantity, productId, userId }));
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(fetchCartProducts(userId));
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
        <Banner pageContent="ViewCart" />
        <Link to="/">
          <button className={styles.back_btn}>Back to products</button>
        </Link>
        <h1 className={styles.heading}>My Cart</h1>
        {cartItems && cartItems.length > 0 ? (
          <div className={styles.main_container}>
            <div className={styles.cart_container}>
              {cartItems?.map((item) => (
                <div key={item?._id} className={styles.cart_item_container}>
                  <div className={styles.image_container}>
                    <img
                      src={item.images ? item?.images[0] : ""}
                      alt={item?.title}
                    />
                  </div>
                  <div className={styles.product_details_container}>
                    <div className={styles.title}>
                      <h3>{item?.title}</h3>
                      <p>Color : Black</p>
                      <p>In Stock</p>
                    </div>
                    <div className={styles.price}>
                      <h3>Price</h3>
                      <p> ₹ {item?.price}</p>
                    </div>
                    <div>
                      <h3>Quantity</h3>
                      <select
                        className={styles.select_quantity}
                        value={item?.quantity}
                        onChange={(e) =>
                          handleQuantityChange({
                            e,
                            productId: item._id,
                          })
                        }
                      >
                        {[...Array(8)].map((_, index) => (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.product_total_price}>
                      <h3>Total</h3>
                      <p> ₹ {item?.price * item?.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.total_products}>
                <p>{totalCount} Item</p>
                <p> ₹ {totalAmount}</p>
              </div>
            </div>
            <div className={styles.cart_price_details}>
              <h4>Price Details</h4>
              <div className={styles.price_details}>
                <div className={styles.about_price}>
                  <p>Total MRP</p>
                  <p> ₹ {totalAmount}</p>
                </div>
                <div className={styles.about_price}>
                  <p>Discount on MRP MRP</p>
                  <p> ₹ 0</p>
                </div>
                <div className={styles.about_price}>
                  <p>Convenience Fee</p>
                  <p> ₹ 45</p>
                </div>
                <div className={styles.cart_grand_total}>
                  <h2>Total Amount -</h2>
                  <p>₹ {totalAmount + 45}</p>
                </div>
                <Link to="/checkout">
                  <button className={styles.place_order_btn}>
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>cart is empty</div>
        )}
      </div>
    </>
  );
}

export default Cart;
