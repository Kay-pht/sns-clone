import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted");
    // console.log(email.current.value);
    // console.log(password.current.value);
    // Make API call to authenticate user or perform login action
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SNS App</h3>
          <span className="loginDesc">Create Real SNS By Myself</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">Let's Sign in</p>
            <input
              type="email"
              className="loginInput"
              placeholder="email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="password"
              required
              minLength={4}
              ref={password}
            />
            <button type="submit" className="loginButton">
              Login
            </button>
            <span className="loginForgot">Forget password?</span>
            <button className="loginRegisterButton">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
