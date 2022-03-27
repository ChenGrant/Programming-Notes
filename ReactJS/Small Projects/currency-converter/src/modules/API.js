export const API_KEY = "apiKey=06e235f6f405bb9d45f0"
export const SERVER = "https://free.currconv.com";
const CONVERT = "/api/v7/convert?q=";
export const CURRENCY = "/api/v7/currencies?";
export const COUNTRY = "/api/v7/countries?";
export const COUNTRY_DATA_PATH =
  "https://raw.githubusercontent.com/ChenGrant/data/main/country_data.txt";
export const CURRENCY_DATA_PATH =
  "https://raw.githubusercontent.com/ChenGrant/data/main/currency_data.txt";
export const ERROR = { status: 400, error: "Free API limit reached." };
export const API_LIMIT_ERROR_MESSAGE = "Free API limit reached.";

export const fetchData = async (path) => {
  try {
    const response = await fetch(SERVER + path + API_KEY);
    const data = await response.json();
    if (JSON.stringify(data) === JSON.stringify(ERROR)) {
      throw API_LIMIT_ERROR_MESSAGE;
    }
    return data;
  } catch (err) {
    console.log(err);
    if (path === COUNTRY) {
      const response = await fetch(COUNTRY_DATA_PATH);
      const data = await response.json();
      return data;
    }
    if (path === CURRENCY) {
      const response = await fetch(CURRENCY_DATA_PATH);
      const data = await response.json();
      return data;
    }
  }
};

const generateURL = (from, to) => {
  return SERVER + CONVERT + from + "_" + to + "&compact=ultra&" + API_KEY;
};

export const ratio = async (from, to) => {
  try {
    const URL = generateURL(from, to);
    const response = await fetch(URL);
    const data = await response.json();
    if (JSON.stringify(data) === JSON.stringify(ERROR)) {
      throw API_LIMIT_ERROR_MESSAGE;
    }
    return Object.values(data)[0];
  } catch (err) {
    console.log(err);
  }
};
