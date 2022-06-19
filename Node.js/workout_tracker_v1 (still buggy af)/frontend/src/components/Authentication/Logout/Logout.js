import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={async () => {
        await signOut(auth);
        navigate("/login");
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
