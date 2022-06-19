import { LOGIN, LOGOUT } from "./userTypes";

let initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.user };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default userReducer;
