import './index.css';


const TextField = (props) => {
  const { label, placeholder, required } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input required={required} placeholder={placeholder}/>
    </div>
  );
};

export default TextField;