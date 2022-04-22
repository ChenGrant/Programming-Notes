import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux";
import styles from "./RenderProduct.module.scss";

const RenderProduct = ({ product }) => {
  const { title, image, description, price } = product;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // if able to add to database, then dispatch addItem action creator
    dispatch(addItem(product));
  };

  return (
    <div className={styles.item}>
      <Typography>{title}</Typography>
      <img src={image} alt={description}></img>
      <Typography>${price}</Typography>
      <Button onClick={addToCartHandler} variant="outlined">
        Add To Cart
      </Button>
    </div>
  );
};

export default RenderProduct;
