import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Loading from "../Shared/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN, PROFILE, REGISTER } from "./Routes";
import { useDispatch } from "react-redux";
import { login } from "../../redux";

const Auth = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const location = useLocation();
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setPageLoading(false);
      if (user) {
        navigate(PROFILE);
        dispatch(login(user))
      } else {
        switch (location.pathname) {
          case LOGIN:
            navigate(LOGIN);
            break;
          case REGISTER:
            navigate(REGISTER);
            break;
          default:
            navigate(LOGIN);
        }
      }
    });
    return unsubscribeAuth;
  }, [navigate, dispatch, location.pathname]);

  return <>{pageLoading ? <Loading /> : children}</>;
};

export default Auth;
