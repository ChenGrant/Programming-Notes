import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  return (
    <Button
      variant="contained"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Login
    </Button>
  );
};

export default Login;
