import './index.css';
import React from "react";


class DropdownList extends React.Component {

  render() {
    const { label, options, required } = this.props;

    return (
      <div className='select-field'>
        <label>{label}</label>
        <select defaultValue={''} required={required}>
          <option value={''} disabled={true} >Selecione o valor</option>
          {
            options.map(option =>
              <option value={option} key={option}>{option}</option>
            )
          }
        </select>
      </div>
    )
  }

}

export default DropdownList;