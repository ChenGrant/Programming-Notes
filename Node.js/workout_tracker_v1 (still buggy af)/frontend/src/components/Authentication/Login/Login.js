import { Alert, Button, TextField, Typography } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import styles from "./Login.module.scss";
import "./Login.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [
    emailPasswordCombinationIsInvalid,
    setEmailPasswordCombinationIsInvalid,
  ] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: [true],
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("Invalid Email"),
    password: Yup.string().required("Required"),
    rememberMe: Yup.array().required("Required"),
  });

  const onSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch {
      setEmailPasswordCombinationIsInvalid(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wallpaper}>
        <Typography variant="h5" sx={{ ml: 5, fontWeight: 700 }}>
          Hi, Welcome Back
        </Typography>
        <img
          src="https://minimals.cc/assets/illustrations/illustration_login.png"
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
              Sign in to Minimal
            </Typography>
            <Typography
              sx={{
                mb: 3,
                color: "#637381",
                fontWeight: 400,
                fontSize: "0.9rem",
              }}
            >
              Enter your details below
            </Typography>
            <Alert
              severity="info"
              sx={{
                borderRadius: "10px",
                fontSize: 13,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 13, position: "relative", top: "2px" }}
              >
                Use email : <b>demo@minimals.cc</b> / password : <b>demo1234</b>
              </Typography>
            </Alert>
            {emailPasswordCombinationIsInvalid && (
              <Alert severity="error">
                <Typography
                  sx={{ fontSize: 13, position: "relative", top: "2px" }}
                >
                  Invalid email/password combination
                </Typography>
              </Alert>
            )}
            <Field name="email">
              {({ field }) => {
                return (
                  <TextField
                    label="Email address"
                    type="email"
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

            <div
              style={{
                //display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ mx: "20px", fontSize: 15 }}>
                  Remember Me
                </Typography>
              </div>
              <Typography
                sx={{
                  mx: "20px",
                  fontSize: 15,
                  color: "green",
                  "&:hover": {
                    cursor: "pointer",
                    textDecoration: "underline",
                  },
                }}
              >
                Forgot password?
              </Typography>
            </div>
            <Button type="submit" className={styles.submit}>
              Login
            </Button>
            <Typography sx={{ fontSize: 15 }}>
              Don't have an account?{" "}
              <span onClick={() => navigate("/register")}>Get started</span>
            </Typography>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
