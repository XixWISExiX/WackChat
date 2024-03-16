import React, { useState } from "react";
import "./Login.css";
import { ReactComponent as UserIcon } from "../images/usericon.svg";
import { ReactComponent as LockIcon } from "../images/lockicon.svg";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-img">
      <div className="content">
        <header>Login to Wacky</header>
        <form action="#">
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
          </div>
          <div className="field">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
        <div className="signup">
          Don't have account? <a href="#">Signup Now</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
