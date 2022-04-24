import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const products = useSelector((state) => state.api.products);
  const productList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return <div>{productList}</div>;
};

export default ProductList;
