import { signOut } from "firebase/auth";
import { Button } from "@mui/material";
import React from "react";
import { auth } from "../../firebase";
import { logout } from "../../redux";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch()
  return (
    <Button variant="contained" onClick={() => signOut(auth).then(()=>dispatch(logout()))}>
      Logout
    </Button>
  );
};

export default Logout;
