import React from "react";
import URLForm from "./URLForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./Error";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
