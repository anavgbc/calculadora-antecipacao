import Input from "../Input";
import "./style.css";

const Form = () => {
  return (
    <form action="">
      <h3>Simule sua Antecipação</h3>
      <Input title="Informe o valor da venda *" />
      <Input
        title="Em quantas parcelas *"
        instruction="Máximo de 12 parcelas"
      />
      <Input title="Informe o percentual de MDR *" />
    </form>
  );
};
export default Form;
