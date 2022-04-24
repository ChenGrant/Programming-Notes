import {
  FETCH_API_FAILURE,
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
} from "./apiTypes";

const initialState = {
  loading: false,
  url: "",
  products: [],
  error: "",
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
        url: action.payload,
      };

    case FETCH_API_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case FETCH_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer