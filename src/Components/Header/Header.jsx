import React from "react";
import styles from "./Header.module.css";
import phoneIcon from "../../images/icons8-phone-80.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/Slices/authSlice";

import Swal from "sweetalert2";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <header className={styles.container}>
      <div className={styles.contact}>
        <img src={phoneIcon} alt="phoneIcon" />
        912121131313
      </div>
      <div className={styles.btns}>
        <p>Get 50% off on selected items</p>
        <span> | </span>
        <p>Shop Now</p>
      </div>
      {user ? (
        <div className={styles.btns}>
          <p>Welcome {user.name}</p>

          <p
            className={styles.btn}
            onClick={() => {
              Swal.fire({
                title: "Are you sure you want to logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#2fca08",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Logout!",
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(logoutUser());

                  navigate("/login");
                }
              });
            }}
          >
            Logout
          </p>
        </div>
      ) : (
        <div className={styles.btns}>
          <Link to="/login">
            <p className={styles.btn}>Login</p>
          </Link>
          <span> | </span>
          <Link to="/signup">
            <p className={styles.btn}>Signup</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
