import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      !user && navigate("/");
      user && navigate("/todo");
    });
    return unsubscribeAuth;
  }, [user, navigate]);

  return (
    <UserContext.Provider value={user}>
      {loading ? <h1>Loading...</h1> : children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserContext, UserProvider, useUser };
