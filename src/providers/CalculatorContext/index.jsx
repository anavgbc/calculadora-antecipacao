import { createContext, useState } from "react";

export const CalculatorContext = createContext({});

export const CalculatorContextProvider = ({ children }) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [days, setDays] = useState([]);

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
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
