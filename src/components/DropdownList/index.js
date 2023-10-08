import './index.css';
import React from "react";


class DropdownList extends React.Component {

  render() {
    const { label, options, required, value } = this.props;

    return (
      <div className='select-field'>
        <label>{label}</label>
        <select value={value} onChange={this.props.change} defaultValue={value} required={required}>
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