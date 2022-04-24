import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { HOME_PATH, STORE_PATH } from "../constants/paths";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { loginUser, logoutUser, setCart, setPath } from "../../redux";
import { USER_COLLECTION } from "../constants/firebasePaths";
import { CircularProgress } from "@mui/material";

const AuthRouting = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        userState.path !== null && dispatch(logoutUser());
        navigate(HOME_PATH);
        setLoading(false);
        return;
      }

      // user is authenticated below

      // if the redux store is uninitialized
      if (!userState.user) {
        const userDoc = await getDoc(doc(db, USER_COLLECTION, user.uid));

        // user just got created
        if (userDoc.data() === undefined) {
          console.log("user just got created");
          const docData = {
            path: STORE_PATH,
            cart: []
          };
          await setDoc(doc(db, USER_COLLECTION, user.uid), docData);
          console.log("doc for new user created");
          dispatch(loginUser(user));
          dispatch(setCart([]));
          dispatch(setPath(STORE_PATH));
        } else {
          const userData = userDoc.data();
          dispatch(loginUser(user));
          console.log(userData.cart);
          dispatch(setCart(userData.cart));
          console.log("user just logged in / user was previously logged in");
          dispatch(setPath(userData.path));
        }
      } else {
        setLoading(false);
        navigate(userState.path);
      }
    });

    return unsubscribeAuth;
  }, [userState, dispatch, navigate]);

  return <>{loading ? <CircularProgress /> : children}</>;
};

export default AuthRouting;
