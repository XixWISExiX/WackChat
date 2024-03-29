import Login from "./Login/Login.js";
import HomePage from "./HomePage/HomePage.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState, useEffect } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if there's an authentication token in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    // Store the authentication token in localStorage
    localStorage.setItem("authToken", "YOUR_AUTH_TOKEN_HERE");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Remove the authentication token from localStorage
    localStorage.removeItem("authToken");
  };

  return (
    <GoogleOAuthProvider clientId="582275805758-f9hfkh9uc08p9p2858hepodk0hqjpv1s.apps.googleusercontent.com">
      {loggedIn ? (
        <HomePage onLogoutSuccess={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </GoogleOAuthProvider>
  );
};

export default App;
