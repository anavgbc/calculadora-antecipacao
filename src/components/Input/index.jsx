import "./style.css";

const Input = ({ title, instruction, type, ...rest }) => {
  return (
    <>
      <div className="container-input">
        <label htmlFor="">{title}</label>
        <input type={type ? type : "text"} {...rest} />
        {instruction && <span>{instruction}</span>}
      </div>
    </>
  );
};

export default Input;
