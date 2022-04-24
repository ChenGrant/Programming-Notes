import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "@mui/material";

const Logout = () => {
  return (
    <Button variant="contained" color="error" onClick={() => signOut(auth)}>
      Logout
    </Button>
  );
};

export default Logout;
