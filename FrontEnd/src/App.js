// import logo from "./logo.svg";
// import "./App.css";
import Login from "./Login/Login.js";
import HomePage from "./HomePage/HomePage.js";
import GoogleAuth from "./Login/GoogleAuth.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="582275805758-f9hfkh9uc08p9p2858hepodk0hqjpv1s.apps.googleusercontent.com">
      {/* <Login></Login> */}
      {/* <HomePage></HomePage> */}
      <GoogleAuth></GoogleAuth>
    </GoogleOAuthProvider>
  );
}

export default App;
