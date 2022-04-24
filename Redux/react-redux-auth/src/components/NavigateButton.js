import { Button } from "@mui/material";
import { updateDoc, doc } from "firebase/firestore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../firebase";
import { setPath } from "../redux";
import { USER_COLLECTION } from "./constants/firebasePaths";
import { getPathNameFromPath } from "./constants/paths";

const NavigateButton = ({ prevPath, newPath }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateHandler = () => {
    const docRef = doc(db, USER_COLLECTION, user.user.uid);
    dispatch(setPath(newPath));
    updateDoc(docRef, {
      path: newPath,
    }).catch(() => {
      dispatch(setPath(prevPath));
    });
  };

  return (
    <Button variant="contained" onClick={navigateHandler}>
      {getPathNameFromPath(newPath)}
    </Button>
  );
};

export default NavigateButton;
