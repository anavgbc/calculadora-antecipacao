import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";
import "./style.css";

const Sidebar = () => {
  const { result, fixingValue } = useContext(CalculatorContext);
  console.log(result);

  return (
    <div className="container-sidebar">
      <div className="sidebar-content">
        <h3>VOCÊ RECEBERÁ:</h3>
        <p>Amanhã: {fixingValue()[0]}</p>
        <p>Em 15 dias: {fixingValue()[1]}</p>
        <p>Em 30 dias:{fixingValue()[2]}</p>
        <p>em 90 dias: {fixingValue()[3]}</p>
      </div>
    </div>
  );
};
export default Sidebar;
