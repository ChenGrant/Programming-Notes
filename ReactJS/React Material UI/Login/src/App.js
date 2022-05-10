import { Alert, Button, Checkbox, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import styles from "./App.module.scss";
import "./App.css";
import * as Yup from "yup";

const onSubmit = (values) => console.log(values);
const validationSchema = Yup.object({
  email: Yup.string().required("Required").email("Invalid Email"),
  password: Yup.string().required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wallpaper}>
        <Typography variant="h5" sx={{ ml: 5 }}>
          Hi, Welcome Back
        </Typography>
        <img src="https://minimals.cc/assets/illustrations/illustration_login.png" alt = 'wallpaper'></img>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={styles.formContainer}>
          <div className={styles.form}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Sign in to Minimal
            </Typography>
            <Typography sx={{ mb: 3 }}>Enter your details below</Typography>
            <Alert
              severity="info"
              sx={{
                borderRadius: "10px",
                fontSize: 13,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography sx = {{fontSize: 13, position: 'relative', top: '2px'}}>Use email : demo@minimals.cc / password : demo1234</Typography>
            </Alert>
            <TextField
              label="Email address"
              name="email"
              variant="outlined"
              className="inputRounded"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              className="inputRounded"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ m: 0, p: 0 }} />
                <Typography sx={{ mx: "20px", fontSize: 15 }}>
                  Remember Me
                </Typography>
              </div>
              <Typography sx={{ mx: "20px", fontSize: 15 }}>
                Forgot Password
              </Typography>
            </div>
            <Button type="submit" className={styles.submit}>
              Login
            </Button>
            <Typography sx={{ fontSize: 15 }}>
              Don't have an account? <span>Get started</span>
            </Typography>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
