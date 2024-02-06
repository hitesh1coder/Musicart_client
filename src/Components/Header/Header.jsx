import React from "react";
import styles from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/Slices/authSlice";
import Swal from "sweetalert2";

import musicartLogo from "/images/musicartLogo.png";
import usersIcon from "/images/icons8-group-32.png";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAdmin = user?.isAdmin;
  console.log(user);
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={musicartLogo} alt="musicartLogo" />
      </div>
      <div className={styles.btns}>
        <p>Get 50% off on selected items</p>
        <span> | </span>
        <p>Shop Now</p>
      </div>
      {user ? (
        <div className={styles.btns}>
          <>
            <div className={styles.user_info}>
              <img src={usersIcon} alt="user" />
              <h2> {user?.name.toUpperCase()}</h2>
            </div>
            {isAdmin && (
              <>
                <span style={{ color: "red", padding: "0 0.3rem" }}>
                  As Admin
                </span>
                <Link to="/admin">
                  <button className={styles.dashboard_btn}>Dashboard</button>
                </Link>
              </>
            )}
          </>
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
