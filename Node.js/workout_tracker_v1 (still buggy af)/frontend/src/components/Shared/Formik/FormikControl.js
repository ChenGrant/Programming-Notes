import React from "react";
import Input from "./Input";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  console.log(control)
  switch (control) {
    case "input":
      console.log('yo')
      return <Input {...rest} />;
    case "checkbox":
      return null;
    default:
      return null;
  }
};

export default FormikControl;
