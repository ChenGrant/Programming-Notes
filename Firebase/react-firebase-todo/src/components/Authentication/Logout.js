import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const Logout = () => {
  return (
    <div>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  );
};

export default Logout;
