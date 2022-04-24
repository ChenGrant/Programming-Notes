export const PATHS = {
  home: "/",
  store: "/store",
  cart: "/cart",
};

export const HOME_PATH = PATHS.home;
export const STORE_PATH = PATHS.store;
export const CART_PATH = PATHS.cart;

export const getPathNameFromPath = (path) => {
  for (const pathName in PATHS) {
    if (PATHS[pathName] === path) {
      return pathName;
    }
  }
};
