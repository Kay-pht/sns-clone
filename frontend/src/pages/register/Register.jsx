import React, { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // confirm password and password confirmation match
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("Passwords do not match");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log("Failed to register user: ", error);
      }
    }
  };

  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const username = useRef();

  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SNS App</h3>
          <span className="loginDesc">Create Real SNS By Myself</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">Let's Sign up</p>
            <input
              type="email"
              className="loginInput"
              placeholder="email"
              required
              ref={email}
            />
            <input
              type="text"
              className="loginInput"
              placeholder="username"
              required
              ref={username}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              required
              minLength={4}
              ref={password}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="confirm password"
              required
              minLength={4}
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              Sign up
            </button>
            <button className="loginRegisterButton">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
