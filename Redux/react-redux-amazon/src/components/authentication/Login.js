import React from "react";
import { Button } from "@mui/material";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  return (
    <Button
      variant="contained"
      onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
    >
      Login
    </Button>
  );
};

export default Login;
