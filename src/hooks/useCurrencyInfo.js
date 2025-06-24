import { useEffect, useState } from "react";
function useCurrencyInfo(currencyCode) {
  // const currentDate = "2025-06-22";
  let apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025-06-22/v1/currencies/${currencyCode}.json`;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      // one way
      //   .then((response) => setData(response?.currencyCode));
      // another way
      .then((response) => {
        setData(response[currencyCode]);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [currencyCode]);
  return data;
}

export default useCurrencyInfo;
