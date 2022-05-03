import { TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = (props) => {
  const { label, name, id, ...rest } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field id={id} name={name} {...rest}>
        {({ field }) => <TextField variant="outlined" {...field} />}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Input;
