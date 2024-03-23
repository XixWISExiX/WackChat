import React, { useState } from "react";
import "./Login.css";
import GoogleAuth from "./GoogleAuth.js";
import { ReactComponent as UserIcon } from "../images/usericon.svg";
import { ReactComponent as LockIcon } from "../images/lockicon.svg";

const LoginForm = ({ onLoginSuccess }) => {
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
    <div className="bg-img">
      <div className="content">
        <header>Login to Wacky</header>
        <div className="wackText">
          <div>
            Obviously you need to sign in with google you wacky wackster you!
          </div>
          <div>😂🤣💩</div>
          <div className="arrow">⬇</div>
        </div>
        {/* <form action="#">
          <div className="field">
            <UserIcon className="icon" />
            <input type="text" required placeholder="Email or Phone" />
          </div>
          <div className="field space">
            <LockIcon className="icon" />
            <input
              type={showPassword ? "text" : "password"}
              className="pass-key"
              required
              placeholder="Password"
            />
            <span className="show" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div> */}
        <div className="google">
          <GoogleAuth onLoginSuccess={onLoginSuccess} />
        </div>
        {/* <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form> */}
        {/* <div className="signup">
          Don't have account? <a href="#">Signup Now</a>
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
