import { ADD_ITEM, LOGIN, LOGOUT, SET_PAGE } from "./userTypes";

export const login = (user, cart, page) => {
  return {
    type: LOGIN,
    payload: [user, cart, page]
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}