import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const CartList = () => {
  const cart = useSelector((state) => state.user.cart);
  console.log(cart);
  const cartList = cart.map((item) => <Item key={item.id} item={item} />);
  return <div>{cartList}</div>;
};

export default CartList;
