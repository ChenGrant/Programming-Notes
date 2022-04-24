import { Typography } from "@mui/material";
import React from "react";
import Login from "../../authentication/Login";

const Home = () => {
  return (
    <div>
    <Typography variant = "h1">Home</Typography>
      <Login />
    </div>
  );
};

export default Home;
