import React from "react";
import { auth } from "../firebase";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  return (
    <button onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}>
      Login
    </button>
  );
};

export default Login;
