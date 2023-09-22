import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import logo from "../../../images/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "../../../redux/Slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile || !password) {
      setIsError(true);
    } else {
      setIsError(false);
      dispatch(signupUser({ name, email, mobile, password }));
    }
  };

  useEffect(() => {
    if (error) {
      alert(error?.message);
    }
    if (user) {
      navigate("/");
    }
  }, [user, dispatch]);

  return (
    <div className={styles.main_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" />
        <h2>Musicart</h2>
      </div>
      <div className={styles.signup_container}>
        <h2>Sign In</h2>
        {/* {error && <div>Error: {error}</div>} */}
        <div className={styles.input_field}>
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.input_field}>
          <label>Mobile number</label>
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(Number(e.target.value))}
          />
        </div>
        <div className={styles.input_field}>
          <label>Email</label>
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
        <p className={styles.disclamar}>
          By enrolling your mobile phone number, you consent to receive
          automated security notifications via text message from Musicart.
          Message and data rates may apply.
        </p>
        {isError && <span>* All fields are required</span>}
        <button
          disabled={loading}
          style={{ pointerEvents: error ? "none" : "" }}
          onClick={handleSubmit}
          type="submit"
          className={styles.btn}
        >
          {loading ? "signing up..." : "Continue"}
        </button>
        <p className={styles.warning}>
          By continuing, you agree to Musicart privacy notice and conditions of
          use.
        </p>
      </div>
      <div>
        Already have an account?<Link to="/login">Sign in</Link>
      </div>
    </div>
  );
}

export default Signup;
