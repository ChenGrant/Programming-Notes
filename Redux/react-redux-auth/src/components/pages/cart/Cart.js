import React from "react";
import { CART_PATH, STORE_PATH } from "../../constants/paths";
import Logout from "../../authentication/Logout";
import NavigateButton from "../../NavigateButton";
import { Typography } from "@mui/material";
import CartList from "./CartList";

const Cart = () => {
  return (
    <div>
      <Typography variant="h1">Cart</Typography>
      <NavigateButton prevPath={CART_PATH} newPath={STORE_PATH} />
      <Logout />
      <CartList />
    </div>
  );
};

export default Cart;
