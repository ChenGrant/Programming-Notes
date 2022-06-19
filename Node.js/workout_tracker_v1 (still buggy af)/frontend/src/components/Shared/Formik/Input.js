import { Alert, Box, TextField } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import React from "react";

const Input = ({ label, name, type, ...rest }) => {
  return (
    <Box>
      <Field name={name}>
        {({ field }) => {
          return (
            <TextField
              label={label}
              variant="outlined"
              type={type}
              {...field}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errorMessage) => <Alert severity="error">{errorMessage}</Alert>}
      </ErrorMessage>
    </Box>
  );
};

export default Input;
