import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { HOME } from "../../constants/Constants";

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userPage = useSelector(state => state.user.page)
  const userCart = useSelector(state => state.user.cart)
  console.log('yo');
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        dispatch(login(user, userCart, userPage));
        navigate(userPage);
      } else {
        navigate(HOME);
      }
    });
    return unsubscribeAuth;
  }, [dispatch]);
  
  return <>{loading ? <CircularProgress /> : children}</>;
};

export default Auth;
