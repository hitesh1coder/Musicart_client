import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems } from "../../redux/Slices/cartSlice";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [quantity, setQuantity] = useState(1);
  console.log(cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
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
                <div key={item.id} className={styles.cart_item_container}>
                  <div className={styles.image_container}>
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                  <div className={styles.product_details_container}>
                    <div className={styles.title}>
                      <h3>{item.title}</h3>
                      <p>Color : Black</p>
                      <p>In Stock</p>
                    </div>
                    <div className={styles.price}>
                      <h3>Price</h3>
                      <p> ₹ {item.price}</p>
                    </div>
                    <div>
                      <h3>Quantity</h3>
                      <select
                        className={styles.select_quantity}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                    <div className={styles.product_total_price}>
                      <h3>Total</h3>
                      <p> ₹ {item.price * quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.total_products}>
                <p>1 Item</p>
                <p> ₹ 3500</p>
              </div>
            </div>
            <div className={styles.cart_price_details}>
              <h4>Price Details</h4>
              <div className={styles.price_details}>
                <div className={styles.about_price}>
                  <p>Total MRP</p>
                  <p> ₹ 3500</p>
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
                  <p>₹ 3545</p>
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
