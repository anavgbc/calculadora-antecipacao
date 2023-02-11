import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";
import "./style.css";

const Sidebar = () => {
  const { result } = useContext(CalculatorContext);
  console.log(result);

  return (
    <div className="container-sidebar">
      <div className="sidebar-content">
        <h3>VOCÊ RECEBERÁ:</h3>
        <p>Amanhã: {result[1]}</p>
        <p>Em 15 dias: {result[15]}</p>
        <p>Em 30 dias:{result[30]}</p>
        <p>em 90 dias: {result[90]}</p>
      </div>
    </div>
  );
};
export default Sidebar;
