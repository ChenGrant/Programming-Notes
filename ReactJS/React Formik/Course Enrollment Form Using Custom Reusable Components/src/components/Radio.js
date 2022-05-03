import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Radio = (props) => {
  const { id, label, name, radioOptions } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {radioOptions.map((option) => (
        <React.Fragment key={option.id}>
          <label htmlFor={option.id}>{option.key}</label>
          <Field type="radio" id={option.id} name={name} value={option.value} />
        </React.Fragment>
      ))}
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Radio;

/*
const Radio = (props) => {
  const { id, label, name, radioOptions } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id}>
        {(formik) => {
          const { field } = formik;
          return radioOptions.map((option) => (
            <input
              type="radio"
              key={option.id}
              id={option.id}
              {...field}
              value={option.value}
              checked={field.value === option.value}
            />
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Radio;
*/
