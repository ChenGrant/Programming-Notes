import { Button, Typography } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase";
import { setCart } from "../../../redux";
import { USER_COLLECTION } from "../../constants/firebasePaths";
const container = {
  border: "2px solid black",
  height: "max-content",
  width: "max-content",
  padding: "20px",
};

const imageStyle = {
  height: "200px",
};

const setNewCart = (cart, newItem) => {
  const [...cartCopy] = cart;
  let itemAlreadyInCart = false;
  cartCopy.forEach((item) => {
    if (item.id === newItem.id) {
      item.quantity += 1;
      itemAlreadyInCart = true;
    }
  });
  !itemAlreadyInCart &&
    cartCopy.push({
      ...newItem,
      quantity: 1,
    });
  return cartCopy;
};

const Product = ({ product }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { title, image, price, description } = product;

  const addToCartHandler = () => {
    const cart = setNewCart(user.cart, product);
    const docRef = doc(db, USER_COLLECTION, user.user.uid);
    updateDoc(docRef, {
      cart: cart,
    }).then(() => dispatch(setCart(cart)));
  };

  return (
    <div style={container}>
      <Typography variant="h6">{title}</Typography>
      <img style={imageStyle} src={image} alt={description} />
      <Typography variant="h5">${price}</Typography>
      <Button onClick={addToCartHandler} variant="contained">
        Add To Cart
      </Button>
    </div>
  );
};

export default Product;
