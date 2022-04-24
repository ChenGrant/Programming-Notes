import { SET_CART, LOGIN_USER, LOGOUT_USER, SET_PATH } from "./userType";

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const setPath = (path) => {
  return {
    type: SET_PATH,
    payload: path,
  };
};

export const setCart = (newCart) => {
  return {
    type: SET_CART,
    payload: newCart,
  };
};
