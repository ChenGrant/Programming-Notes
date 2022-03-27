import { v4 as uuidv4 } from "uuid";

export const generateUniqueCurrencyIDs = (data) => {
  let uniqueCurrencyIds = Array.from(
    new Set(
      Object.values(data.countries.results).map((country) => country.currencyId)
    )
  );
  uniqueCurrencyIds.sort();
  return uniqueCurrencyIds.map((id) => {
    return (
      <option key={uuidv4()} value={id}>
        {id}
      </option>
    );
  });
};
