import "./style.css";
import "../../styles/global.css";
import Form from "../../components/FormCalculator";
import Sidebar from "../../components/Sidebar";
const Home = () => {
  return (
    <div className="container-home">
      <div className="container-home-main">
        <Form />
        <Sidebar />
      </div>
    </div>
  );
};
export default Home;
