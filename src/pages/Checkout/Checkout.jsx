import React, { useEffect, useState } from "react";
import styles from "./Checkout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../redux/Slices/cartSlice";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
        <Banner pageContent="Checkout" />
        <Link to="/">
          <button className={styles.back_btn}>Back to products</button>
        </Link>
        <h1 className={styles.heading}>Checkout</h1>

        {cartItems && cartItems.length > 0 ? (
          <div className={styles.main_container}>
            <div className={styles.order_details}>
              <div className={styles.delivery_detail}>
                <h2>1. Delivery address</h2>
                <div className={styles.address}>
                  <p>Akash Patel</p>
                  <p>104</p>
                  <p>kk hh nagar lucknow</p>
                  <p>Uttar pradesh 226025</p>
                </div>
              </div>
              <div className={styles.payment_details}>
                <h2>2. Payment method</h2>
                <div>
                  <p>Pay on delivery ( Cash/Card)</p>
                </div>
              </div>
              <div className={styles.item_review}>
                <h2>3. Review items and delivery</h2>

                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItems}>
                    <div className={styles.image_container}>
                      <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className={styles.product_details_container}>
                      <h3>{item.title}</h3>
                      <span>Color : Black</span>
                      <span>In Stock</span>
                      <p>Estimated delivery : </p>
                      <p>Monday — FREE Standard Delivery</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.order_confirmation}>
                <Link to="/order-success">
                  <button className={styles.place_order_btn}>
                    Place Your Order
                  </button>
                </Link>
                <div>
                  <h2>Order Total : ₹3545.00</h2>
                  <p>
                    By placing your order, you agree to Musicart privacy notice
                    and conditions of use.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.order_Price_details}>
              <Link to="/order-success">
                <button className={styles.place_order_btn}>
                  Place your Order
                </button>
              </Link>
              <p className={styles.terms}>
                By placing your order, you agree to Musicart privacy notice and
                conditions of use.
              </p>
              <div className={styles.order_summery}>
                <p>Order Summery</p>
                <div className={styles.price}>
                  <p>items: </p>
                  <p>₹ 3500.00</p>
                </div>
                <div className={styles.price}>
                  <p>Delivery: </p>
                  <p>₹ 45</p>
                </div>
              </div>
              <div className={styles.total_order_amount}>
                <p>Order Total : </p>
                <p>₹ 3545.00</p>
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

export default Checkout;
