import React from "react";
import TextError from "./TextError";
import { ErrorMessage, Field } from "formik";

const CheckboxGroup = (props) => {
  const { id, label, name, options } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id}>
        {(formik) => {
          const { field } = formik;
          return options.map((option) => (
            <input
              type="checkbox"
              key={option.id}
              id={option.id}
              {...field}
              value={option.value}
              checked={field.value.includes(option.value)}
            />
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default CheckboxGroup;
