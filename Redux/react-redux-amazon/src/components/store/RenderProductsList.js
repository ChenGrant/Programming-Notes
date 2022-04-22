import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import RenderProduct from "./RenderProduct";

const styling = {
  display: "flex",
  flexWrap: "wrap",
};
const RenderProductsList = () => {
  const products = useSelector((state) => state.products);

  const productList = products.products.map((product) => {
    return (
      <span key={product.id}>
        <RenderProduct product={product} />
      </span>
    );
  });

  return (
    <>
      <Typography variant="h1">Products</Typography>
      {products.loading ? (
        <CircularProgress />
      ) : (
        <div style={styling}>{productList}</div>
      )}
    </>
  );
};

export default RenderProductsList;
