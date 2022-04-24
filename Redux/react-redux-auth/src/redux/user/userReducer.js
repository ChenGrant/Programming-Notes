import { LOGIN_USER, LOGOUT_USER, SET_PATH, SET_CART } from "./userType";

const initialState = {
  user: null,
  path: null,
  cart: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOGOUT_USER:
      return { ...initialState };

    case SET_PATH:
      return {
        ...state,
        path: action.payload,
      };

    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
