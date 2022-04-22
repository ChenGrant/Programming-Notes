import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { STORE } from "../../constants/Constants";
import { setPage } from "../../redux";
import RenderCartList from "./RenderCartList";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h1">CART</Typography>
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setPage(STORE));
          navigate(STORE);
        }}
      >
        STORE
      </Button>
      <RenderCartList />
    </>
  );
};

export default Cart;
