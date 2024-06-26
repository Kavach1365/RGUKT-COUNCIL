import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../Error/ErrorMessage";
import { IoArrowBack } from "react-icons/io5";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "https://rgukt-council-backend.vercel.app/api/users/login",
        {
          username,
          password,
        },
        config
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.login_left}>
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className={`${styles.back_button}`}>
            <IoArrowBack size={24} />
          </button>
          <div className={styles.logo_title_container}>
            <img
              className="w-20"
              src="https://i.ibb.co/nk1062c/club-Council-light-logo-no-BG.png"
              alt="clubCouncil-logo"
            />
            <h1 className={styles.login_title}>Login</h1>
          </div>
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loader />}
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <input
              type="string"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              className={styles.login_input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className={styles.login_input}
            />
            <button type="submit" className={styles.login_green_btn}>
              Log In
            </button>
          </form>
        </div>
        <div className={styles.login_right}>
          <img
            src="https://i.ibb.co/h9FCQ3h/login-page-image.jpg"
            alt="New Here"
            className={styles.login_right_img}
          />
          <Link to="/signup">
            <button type="button" className={styles.login_white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
