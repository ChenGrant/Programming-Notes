import { ErrorMessage, Field } from "formik";
import React from "react";
import DateView from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import TextError from "./TextError";

const DatePicker = (props) => {
  const { label, name, id } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Field name={name} id={id}>
        {(formik) => {
          const { form, field } = formik;
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              {...field}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default DatePicker;
