import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Button } from "@mui/material";
import { useUser } from "../UserProvider";

const Dashboard = () => {
  const user = useUser();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUserData = async (user) => {
      const userIdToken = await user.getIdToken();
      const response = await fetch(`/users/7TDC4WLZN8NgLonrqsz265WiOrL2`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + userIdToken,
        },
      });
      const data = await response.json();
      console.log(user.uid)
      console.log(data)
      console.log("Bearer " + userIdToken)
      setUserData(data);
    };
    getUserData(user);
  }, [user]);

  return (
    <div>
      Dashboard
      <Button onClick={() => signOut(auth)} variant="contained">
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
