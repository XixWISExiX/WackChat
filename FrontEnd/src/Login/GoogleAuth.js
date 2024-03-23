import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import HomePage from "../HomePage/HomePage";

const GoogleAuth = ({ onLoginSuccess }) => {
  const handleLoginSuccess = () => {
    // Perform Google authentication logic...
    // After successful authentication, call onLoginSuccess callback
    onLoginSuccess();
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleAuth;
