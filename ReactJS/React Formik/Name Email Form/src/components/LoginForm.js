import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, Alert, Typography, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import styles from "./LoginForm.module.scss";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const onSubmit = (values) => console.log(values);

const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <Typography component="div" variant="h4" gutterBottom>
          Create Account
        </Typography>
        <div>
          <Field name="firstName">
            {({ field }) => {
              return (
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="standard"
                  {...field}
                  placeholder="First Name"
                />
              );
            }}
          </Field>
          <ErrorMessage name="firstName">
            {(errMsg) => <Alert severity="error">{errMsg}</Alert>}
          </ErrorMessage>
        </div>
        <div>
          <Field name="lastName">
            {({ field }) => {
              return (
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  label="Last Name"
                  {...field}
                  placeholder="Last Name"
                />
              );
            }}
          </Field>
          <ErrorMessage name="lastName">
            {(errMsg) => <Alert severity="error">{errMsg}</Alert>}
          </ErrorMessage>
        </div>
        <div>
          <Field name="email">
            {({ field }) => {
              return (
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  label="Email"
                  {...field}
                  placeholder="Email"
                />
              );
            }}
          </Field>
          <ErrorMessage name="email">
            {(errMsg) => <Alert severity="error">{errMsg}</Alert>}
          </ErrorMessage>
        </div>
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
