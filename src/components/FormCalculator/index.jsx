import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";
import Input from "../Input";
import "./style.css";

const Form = () => {
  const { setAmount, amount, setInstallments, installments, setMdr, mdr } =
    useContext(CalculatorContext);

  return (
    <form>
      <h3>Simule sua Antecipação</h3>
      <Input
        title="Informe o valor da venda *"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        title="Em quantas parcelas *"
        instruction="Máximo de 12 parcelas"
        value={installments}
        onChange={(e) => setInstallments(e.target.value)}
      />
      <Input
        title="Informe o percentual de MDR *"
        value={mdr}
        onChange={(e) => setMdr(e.target.value)}
      />
    </form>
  );
};
export default Form;
