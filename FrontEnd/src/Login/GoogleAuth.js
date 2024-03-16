import { GoogleLogin } from "@react-oauth/google";
import HomePage from "../HomePage/HomePage";
function GoogleAuth() {
  return (
    <GoogleLogin
      //TODO Login Google auth needs to be finished
      onSuccess={(credentialResponse) => {
        // const credentialResponseDecoded = jwt_decode(
        // credentialResponse.credential
        // );
        // console.log(credentialResponse);
        // console.log(credentialResponseDecoded);
        <HomePage></HomePage>;
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}

export default GoogleAuth;
