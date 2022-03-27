import React, { useState, useEffect } from "react";
import { generateUniqueCurrencyIDs } from "../modules/UniqueCurrencyIDs.js";
import { ratio } from "../modules/API";
import CurrencyAmountForm from "./CurrencyAmountForm.js";

const CurrencyConverter = ({ data }) => {
  const [currencyIds, setCurrencyIds] = useState([]);
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [currency1Currency2Ratio, setCurrency1Currency2Ratio] = useState(1);

  useEffect(async () => {
    const uniqueCurrencyIDs = generateUniqueCurrencyIDs(data);
    const newCurrency1 = uniqueCurrencyIDs[0].props.value;
    const newCurrency2 = uniqueCurrencyIDs[1].props.value;
    const newAmount1 = "1";
    const newCurrency1Currency2Ratio = await ratio(newCurrency1, newCurrency2);
    setCurrency1(newCurrency1);
    setCurrency2(newCurrency2);
    setAmount1(newAmount1);
    setCurrency1Currency2Ratio(newCurrency1Currency2Ratio);
    setAmount2(newAmount1 * newCurrency1Currency2Ratio);
    setCurrencyIds(uniqueCurrencyIDs);
  }, []);

  const setAmount = async (id, amount) => {
    if (id === 1) {
      setAmount1(amount);
      setAmount2(amount * currency1Currency2Ratio);
    }
    if (id === 2) {
      setAmount2(amount);
      setAmount1(amount / currency1Currency2Ratio);
    }
  };

  const setNewCurrency = async (id, currency) => {
    if (id === 1) {
      setCurrency1(currency);
      const newCurrency1Currency2Ratio = await ratio(currency, currency2);
      setCurrency1Currency2Ratio(newCurrency1Currency2Ratio);
      setAmount2(amount1 * newCurrency1Currency2Ratio);
    }
    if (id === 2) {
      setCurrency2(currency);
      const newCurrency1Currency2Ratio = await ratio(currency1, currency);
      setCurrency1Currency2Ratio(newCurrency1Currency2Ratio);
      setAmount1(amount2 / newCurrency1Currency2Ratio);
    }
  };

  return (
    <>
      <CurrencyAmountForm
        id={1}
        currencyIds={currencyIds}
        currency={currency1}
        setCurrency={setNewCurrency}
        amount={amount1}
        setAmount={setAmount}
      />
      <CurrencyAmountForm
        id={2}
        currencyIds={currencyIds}
        currency={currency2}
        setCurrency={setNewCurrency}
        amount={amount2}
        setAmount={setAmount}
      />
    </>
  );
};

export default CurrencyConverter;
