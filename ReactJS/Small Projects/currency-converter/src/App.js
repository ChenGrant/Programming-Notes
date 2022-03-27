import React, { useState, useEffect } from "react";
import CurrencyConverter from "./components/CurrencyConverter.js";
import { CURRENCY, COUNTRY, fetchData } from "./modules/API.js";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(async () => {
    setData({
      countries: await fetchData(COUNTRY),
      currencies: await fetchData(CURRENCY),
    });
    setLoaded(true);
  }, []);

  return <>{loaded && <CurrencyConverter data={data}></CurrencyConverter>}</>;
};

export default App;
