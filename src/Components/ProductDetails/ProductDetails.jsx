import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import backIcon from "../../images/icons8-back-50.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSingleProduct,
  resetSingleProduct,
} from "../../redux/Slices/singleProductSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import SearchBarHeader from "../../MobileComponents/MobileHeader/SeachBarHeader";
import MobileFooter from "../../MobileComponents/MobileFooter/MobileFooter";
import { addToCart } from "../../redux/Slices/cartSlice";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isMobile } = useSelector((state) => state.ui);
  const { user } = useSelector((state) => state.auth);
  const userId = user?.userid;
  const { product, status, error } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
    return () => {
      dispatch(resetSingleProduct());
    };
  }, [dispatch, productId]);
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  const handleAddToCart = async () => {
    if (user) {
      await dispatch(addToCart({ userId, product }));
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };
  const SlideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {isMobile ? <SearchBarHeader /> : <Header />}
      {!isMobile && <Banner pageContent={product?.title} />}
      <div div className={styles.container}>
        {isMobile ? (
          <Link to="/">
            <img
              className={styles.back_btn_mobile}
              src={backIcon}
              alt="backIcon"
            />
          </Link>
        ) : (
          <Link to="/">
            <button className={styles.back_btn}>Back to products</button>
          </Link>
        )}
        {product ? (
          <>
            <div className={styles.product_container}>
              {!isMobile && (
                <p className={styles.about_product}>
                  {product.title} is {product.description}
                </p>
              )}
              <div className={styles.product_details}>
                {isMobile && (
                  <button onClick={handleAddToCart} className={styles.buy_btn}>
                    Buy Now
                  </button>
                )}
                {isMobile && (
                  <div className={styles.mobile_image_container}>
                    {product.images.map((image, index) => (
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                      >
                        <SwiperSlide>
                          <div className={styles.product_img} key={index}>
                            <img src={image} alt={product.title} />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    ))}
                  </div>
                )}
                {!isMobile && (
                  <div className={styles.product_img}>
                    <img
                      src={product.images[displayImageIndex]}
                      alt={product.title}
                    />
                  </div>
                )}
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
                  {isMobile && (
                    <p className={styles.about_product}>
                      {product.title} is {product.description}
                    </p>
                  )}
                  <h2 className={styles.productPrice}>
                    Price - ₹ {product.price}
                  </h2>
                  <div>
                    <span>{product?.color}</span>
                    <span> | </span>
                    <span>{product?.type} </span>
                  </div>
                  <p className={styles.product_info}>About this Item</p>
                  <ul>
                    {product?.details?.map((info, index) => (
                      <li key={index} className={styles.product_info_list}>
                        * {info}
                      </li>
                    ))}
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
              {!isMobile && (
                <div className={styles.product_other_images}>
                  {product?.images?.map((image, index) => (
                    <div key={index} className={styles.other_images_container}>
                      <img
                        key={index}
                        onClick={() => setDisplayImageIndex(index)}
                        src={image}
                        alt={product.title}
                      />
                    </div>
                  ))}
                </div>
              )}
              <div className={styles.product_btns}>
                <button onClick={handleAddToCart} className={styles.cart_btn}>
                  Add to Cart
                </button>

                <button onClick={handleAddToCart} className={styles.buy_btn}>
                  Buy Now
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      {isMobile && <MobileFooter />}
    </>
  );
}

export default ProductDetail;