import React from "react";
import { useSelector } from "react-redux";

const RenderCartList = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return <div>RenderCartList</div>;
};

export default RenderCartList;
