import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from "./productsTypes";

const FAKE_STORE_API_URL = "https://fakestoreapi.com/products";

export const fetchProductsRequest = (url) => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
    payload: url,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest(FAKE_STORE_API_URL));
    try {
      const response = await fetch(FAKE_STORE_API_URL);
      const products = await response.json();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};
