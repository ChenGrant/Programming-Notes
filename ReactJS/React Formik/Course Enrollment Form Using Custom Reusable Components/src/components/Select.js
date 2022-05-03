import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = ({ id, label, name, options }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field as="select" id={id} name={name}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Select;
