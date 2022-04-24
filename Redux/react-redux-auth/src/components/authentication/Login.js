import React from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "@mui/material";

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
