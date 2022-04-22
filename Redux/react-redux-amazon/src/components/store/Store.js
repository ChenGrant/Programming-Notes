import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CART } from "../../constants/Constants";
import { fetchProducts, setPage } from "../../redux";
import Logout from "../authentication/Logout";
import RenderProductsList from "./RenderProductsList";

const Store = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    products.length === 0 && dispatch(fetchProducts());
  }, [dispatch, products]);

  if (!user.user) return null;

  return (
    <>
      <Typography variant="h1">Store</Typography>
      <Typography variant="h6">User: {user.user.email}</Typography>
      <Logout />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setPage(CART));
          navigate(CART);
        }}
      >
        {" "}
        Cart
      </Button>
      <RenderProductsList />
    </>
  );
};

export default Store;
