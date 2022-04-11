import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../components/Loading";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      let newLoading = false;
      setUser(user);
      setLoading(newLoading);
      !user && navigate("/");
      user && navigate("/todo");
    });
    return unsubscribeAuth;
  }, [user, navigate]);

  return (
    <UserContext.Provider value={user}>
      {loading ? <Loading /> : children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { UserContext, UserProvider, useUser };
