import Login from "./Authentication/Login/Login";
import Register from "./Authentication/Register/Register";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";
import Auth from "./Authentication/Auth";
import store from "../redux/store";
import { LOGIN, PROFILE, REGISTER } from "./Authentication/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Auth>
          <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
            <Route path={PROFILE} element={<Profile />} />
          </Routes>
        </Auth>
      </Router>
    </Provider>
  );
};

export default App;
