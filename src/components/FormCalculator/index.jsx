import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";
import Input from "../Input";
import "./style.css";

const Form = () => {
  const {
    setAmount,
    amount,
    setInstallments,
    installments,
    setMdr,
    mdr,
    days,
    setDays,
    setListDays,
    listDays,
  } = useContext(CalculatorContext);

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
      <div className="container-days">
        <Input
          title="Outros prazos a serem calculados"
          type="number"
          min="1"
          max="120"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (
              days <= 120 &&
              !listDays.includes(days || Number(days)) &&
              listDays.length < 10
            ) {
              setListDays([...listDays, days]);
            }
          }}
        >
          +
        </button>
      </div>
    </form>
  );
};
export default Form;
