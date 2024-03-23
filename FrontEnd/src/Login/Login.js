import React, { useState } from "react";
import "./Login.css";
import GoogleAuth from "./GoogleAuth.js";

const LoginForm = ({ onLoginSuccess }) => {
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
        <div className="google">
          <GoogleAuth onLoginSuccess={onLoginSuccess} />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
