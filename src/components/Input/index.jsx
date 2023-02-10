import "./style.css";

const Input = ({ title, instruction }) => {
  return (
    <>
      <div className="container-input">
        <label htmlFor="">{title}</label>
        <input type="text" />
        {instruction && <span>{instruction}</span>}
      </div>
    </>
  );
};

export default Input;
