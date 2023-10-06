import './index.css';
import TextField from '../TextField';
import React from 'react';
import DropdownList from '../DropdownList';
import SubmitButton from '../SubmitButton';


class TeacherForm extends React.Component {

  render() {
    const teams = [
      "Programação",
      "Front-end",
      "Back-end",
      "Design",
    ]

    return (
      <section className='teacher-form'>
        <form onSubmit={this.addTeacher}>
          <h2>Preencha os dados do colaborador</h2>
          <TextField required={true} label='Nome' placeholder='Digite o nome' />
          <TextField required={true} label='Cargo' placeholder='Digite o cargo' />
          <TextField required={true} label='Imagem' placeholder='Digite o link da imagem' />
          <DropdownList required={true} label='Time' options={teams}/>
          <SubmitButton>Criar card</SubmitButton>
        </form>
      </section>
    )
  }

  addTeacher(event) {
    event.preventDefault();
    console.log(event);
  }

}

export default TeacherForm;