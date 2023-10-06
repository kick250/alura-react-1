import './index.css';


const TextField = (props) => {
  const { label, placeholder } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input placeholder={placeholder}/>
    </div>
  );
};

export default TextField;