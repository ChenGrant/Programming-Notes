import { Alert, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import styles from "./Register.module.scss";
import "./Register.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../Routes";

const Register = () => {
  const [
    emailPasswordCombinationIsInvalid,
    setEmailPasswordCombinationIsInvalid,
  ] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const URL = SERVER + "createUser";
      console.log(URL)
      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
    } catch (err) {
      setEmailPasswordCombinationIsInvalid(true);
      console.log(err.message);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid Email"),
    password: Yup.string().required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <div className={styles.wallpaper}>
        <Typography variant="h5" sx={{ ml: 5, fontWeight: 700 }}>
          Manage the job more effectively with Minimal
        </Typography>
        <img
          src="https://minimals.cc/assets/illustrations/illustration_register.png"
          alt="wallpaper"
        ></img>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.formContainer}>
          <div className={styles.form}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Get started absolutely free.
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: "#637381",
                fontWeight: 400,
                fontSize: "0.9rem",
              }}
            >
              Free forever. No credit card needed.
            </Typography>
            {emailPasswordCombinationIsInvalid && (
              <Alert severity="error">
                <Typography
                  sx={{ fontSize: 13, position: "relative", top: "2px" }}
                >
                  Email already used
                </Typography>
              </Alert>
            )}
            <Field name="email">
              {({ field }) => {
                return (
                  <TextField
                    label="Email address"
                    variant="outlined"
                    className="inputRounded"
                    {...field}
                  />
                );
              }}
            </Field>
            <ErrorMessage name="email">
              {(errorMessage) => <Alert severity="error">{errorMessage}</Alert>}
            </ErrorMessage>
            <Field name="password">
              {({ field }) => {
                return (
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    className="inputRounded"
                    {...field}
                  />
                );
              }}
            </Field>
            <ErrorMessage name="password">
              {(errorMessage) => <Alert severity="error">{errorMessage}</Alert>}
            </ErrorMessage>
            <Button type="submit" className={styles.submit}>
              Register
            </Button>
            <Typography sx={{ fontSize: 15 }}>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </Typography>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
