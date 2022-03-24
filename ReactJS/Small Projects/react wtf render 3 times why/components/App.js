import React from "react";
import Greet from "./Greet";

const App = () => {
  var user = {
    name: "anna",
    hobbies: ["Sports", "reading"]
  }
  return (
    <>
      <Greet my_props={user}>Content 2</Greet>
    </>
  );
};

export default App;
