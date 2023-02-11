import { CalculatorContextProvider } from "./CalculatorContext";

const Providers = ({ children }) => {
  return <CalculatorContextProvider>{children}</CalculatorContextProvider>;
};

export default Providers;
