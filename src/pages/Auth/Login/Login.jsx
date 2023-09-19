import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../../redux/Slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const user = useSelector((state) => state.auth.user);
  // const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      dispatch(loginUser({ email, password }));
    }
  };

  // // If the user is authenticated, redirect to home/dashboard page
  // if (user) {
  //   // navigate("/");
  // }

  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" />
        <h2>Musicart</h2>
      </div>
      <div className={styles.login_container}>
        <h1>Sign In</h1>
        {/* {error && <div>Error: {error}</div>} */}
        <div className={styles.input_field}>
          <label>Enter your email or mobile number</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.input_field}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Continue
        </button>
        <p className={styles.warning}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
      <div className={styles.text}>
        <span className={styles.line}>
          <hr />
        </span>
        <span>New to Musicart?</span>
        <span className={styles.line}>
          <hr />
        </span>
      </div>
      <div className={styles.createAccount_Btn}>
        <p>Create your Musicart account</p>
      </div>
    </div>
  );
}

export default Login;
