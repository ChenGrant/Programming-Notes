import {
  FETCH_API_FAILURE,
  FETCH_API_REQUEST,
  FETCH_API_SUCCESS,
} from "./apiTypes";

export const fetchApiRequest = (url) => {
  return {
    type: FETCH_API_REQUEST,
    payload: url,
  };
};

export const fetchApiSuccess = (products) => {
  return {
    type: FETCH_API_SUCCESS,
    payload: products,
  };
};

export const fetchApiFailure = (error) => {
  return {
    return: FETCH_API_FAILURE,
    payload: error,
  };
};

export const fetchApi = (url) => {
  return async (dispatch) => {
    dispatch(fetchApiRequest(url));
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(fetchApiSuccess(data));
    } catch (error) {
      dispatch(fetchApiFailure(error.message));
    }
  };
};
