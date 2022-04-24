import React, { useEffect } from "react";
import { CART_PATH, STORE_PATH } from "../../constants/paths";
import Logout from "../../authentication/Logout";
import NavigateButton from "../../NavigateButton";
import { CircularProgress, Typography } from "@mui/material";
import { fetchApi } from "../../../redux/api/apiActions";
import { PRODUCTS_API_URL } from "../../constants/api";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./ProductList";

const Store = () => {
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();
  useEffect(() => {
    api.products.length === 0 && dispatch(fetchApi(PRODUCTS_API_URL));
  }, [dispatch]);
  return (
    <>
      <Typography variant="h1">Store</Typography>
      <NavigateButton prevPath={STORE_PATH} newPath={CART_PATH} />
      <Logout />
      <div>{api.loading ? <CircularProgress /> : <ProductList />}</div>
    </>
  );
};

export default Store;
