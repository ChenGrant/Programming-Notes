import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [firstUserValue, setFirstUserValue] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      setFirstUserValue(false);
      setUser(user);
      if (user === null) {
        switch (location.pathname) {
          case "/dashboard":
            navigate("/");
            break;
          default:
            break;
        }
      } else {
        switch (location.pathname) {
          case "/":
            navigate("/dashboard");
            break;
          default:
            break;
        }
      }
    });

    return unsubscribeAuth;
  }, [navigate, firstUserValue, location.pathname]);

  useEffect(() => {
    const postUserInformation = async () => {
      const userIdToken = await user.getIdToken();
      const response = await fetch(`/login/${user.uid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userIdToken,
        },
        body: JSON.stringify(user),
      });
      const text = await response.text();
    };
    user !== null && postUserInformation();
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      {firstUserValue ? <CircularProgress /> : children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserContext, UserProvider, useUser };
