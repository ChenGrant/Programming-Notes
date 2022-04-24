import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../redux/store";
import { CART_PATH, HOME_PATH, STORE_PATH } from "./constants/paths";
import AuthRouting from "./authentication/AuthRouting";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthRouting>
          <Routes>
            <Route path={HOME_PATH} element={<Home />} />
            <Route path={STORE_PATH} element={<Store />} />
            <Route path={CART_PATH} element={<Cart />} />
          </Routes>
        </AuthRouting>
      </Router>
    </Provider>
  );
};

export default App;
