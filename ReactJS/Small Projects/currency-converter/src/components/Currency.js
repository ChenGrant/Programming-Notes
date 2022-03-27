import { useRef } from "react";

const Currency = ({ id, currencyIds, currency, setCurrency }) => {
  const selectRef = useRef();
  return (
    <select
      ref={selectRef}
      onChange={() => setCurrency(id, selectRef.current.value)}
      value={currency}
    >
      {currencyIds}
    </select>
  );
};

export default Currency;
