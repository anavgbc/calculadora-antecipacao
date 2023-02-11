import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const CalculatorContext = createContext({});

export const CalculatorContextProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [days, setDays] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (installments !== "" && amount !== "" && mdr !== "") {
      api
        .post("", {
          amount: parseInt(amount) * 100,
          installments: installments,
          mdr: mdr,
        })
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [amount, installments, mdr]);

  const fixingValue = () => {
    const values = Object.keys(result).map((item) =>
      (result[item] / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    return values;
  };

  console.log(fixingValue());
  return (
    <CalculatorContext.Provider
      value={{
        amount,
        setAmount,
        installments,
        setInstallments,
        mdr,
        setMdr,
        days,
        setDays,
        result,
        fixingValue,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
