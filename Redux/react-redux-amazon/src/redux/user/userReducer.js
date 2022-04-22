import { STORE } from "../../constants/Constants";
import { ADD_ITEM, LOGIN, LOGOUT, SET_PAGE } from "./userTypes";

let initialState = {
  user: null,
  cart: [],
  page: STORE,
};

const userReducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case LOGIN:
      const [user, cart, page] = action.payload;
      return {
        user: user,
        cart: cart,
        page: page,
      };

    case LOGOUT:
      return {
        user: null,
        cart: [],
        page: STORE,
      };

    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case ADD_ITEM:
      const [...cartCopy] = state.cart
      const product = action.payload
      if (cartCopy.some(item => item.id === product.id)) {
        cartCopy.forEach(item => {
          if (item.id === product.id) {
            item.quantity += 1
          }
        })
      } else {
        cartCopy.push({...product, quantity : 1})
      }
      return {
        ...state, cart: cartCopy
      }
      
    default:
      return state;
  }
};

export default userReducer;
