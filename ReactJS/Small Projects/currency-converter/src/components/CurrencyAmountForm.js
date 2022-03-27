import React, { useState } from "react";
import Currency from "./Currency.js";
import isValidNumber from "../modules/ValidNumber.js";

const CurrencyAmountForm = (props) => {
  const { id, currencyIds, amount, setAmount, currency, setCurrency } = props;

  const [valid, setValid] = useState(true);

  const inputOnChangeHandler = (event) => {
    setAmount(id, event.target.value);
    newAmountHandler();
  };

  const inputOnKeyDownHandler = (event) =>
    event.key === "Enter" && newAmountHandler();

  const newAmountHandler = () =>
    isValidNumber(amount) ? setValid(true) : setValid(false);

  return (
    <div>
      <input
        value={amount}
        onChange={inputOnChangeHandler}
        onKeyDown={inputOnKeyDownHandler}
      ></input>
      <Currency
        id={id}
        currencyIds={currencyIds}
        currency={currency}
        setCurrency={setCurrency}
      />
      {valid ? null : <h1>Invalid Number</h1>}
    </div>
  );
};

export default CurrencyAmountForm;
