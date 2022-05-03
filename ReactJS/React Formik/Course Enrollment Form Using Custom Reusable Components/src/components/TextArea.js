import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const TextArea = ({ name, id, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field as="textarea" id={id} name={name} />
      <ErrorMessage name = {name} component = {TextError}/>
    </>
  );
};

export default TextArea;
