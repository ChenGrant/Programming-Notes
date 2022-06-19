import React, { useEffect } from "react";
import Logout from "../Authentication/Logout/Logout";
import { useSelector } from "react-redux";
import { SERVER } from "../Authentication/Routes";


const Profile = () => {
  const user = useSelector((state) => state.user);
  const fetchData = async () => {
    try {
      //const response = await fetch(SERVER+'getUserTodos/'+user.user.uid);
      //const data = await response.text();
      // console.log(data);
    } catch {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      Profile of {user.user.email}
      <Logout />
      <ul>
        <li>
          When a user is created, create a file in database for them (node js)
        </li>
        <li>fetch user todos</li>
        <li>user can add new todos/photos</li>
      </ul>
    </div>
  );
};

export default Profile;
