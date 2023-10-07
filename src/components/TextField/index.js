import './index.css';


const TextField = (props) => {
  const { label, placeholder, required, value } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input value={value} onInput={props.change} required={required} placeholder={placeholder}/>
    </div>
  );
};

export default TextField;