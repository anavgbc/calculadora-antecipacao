import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";
import "./style.css";

const Sidebar = () => {
  const { result, fixingValue, listDays } = useContext(CalculatorContext);
  return (
    <div className="container-sidebar">
      <div className="sidebar-content">
        <h3>VOCÊ RECEBERÁ:</h3>
        {result ? (
          Object.keys(result).map((day, index) => (
            <>
              {day == 1 ? (
                <p>
                  Amanhã: <strong>{fixingValue()[index]}</strong>
                </p>
              ) : (
                <p>
                  Em {day} dias: {fixingValue()[index]}
                </p>
              )}
            </>
          ))
        ) : (
          <>
            {listDays.map((elem) => (
              <>{elem == 1 ? <p>Amanhã:</p> : <p>Em {elem} dias:</p>}</>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
