import React from "react";

const Item = ({ item }) => {
  const { title, quantity, price } = item;
  return (
    <ul>
      <li>Item:{title}</li>
      <li>Quantity: {quantity}</li>
      <li>Price: ${price}</li>
    </ul>
  );
};

export default Item;
