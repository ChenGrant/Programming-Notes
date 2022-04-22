import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./store/Store";
import store from "../redux/store";
import Auth from "./authentication/Auth";
import Cart from "./store/Cart";
import { CART, HOME, STORE } from "../constants/Constants";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Auth>
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={STORE} element={<Store />} />
            <Route path={CART} element={<Cart />} />
          </Routes>
        </Auth>
      </Router>
    </Provider>
  );
};

export default App;
