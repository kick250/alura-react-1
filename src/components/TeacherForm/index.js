import './index.css';
import TextField from '../TextField';
import React from 'react';


class TeacherForm extends React.Component {

  render() {
    return (
      <section className='teacher-form'>
        <form>
          <h2>Preencha os dados do colaborador</h2>
          <TextField label='Nome' placeholder='Digite o nome' />
          <TextField label='Cargo' placeholder='Digite o cargo' />
          <TextField label='Imagem' placeholder='Digite o link da imagem' />
        </form>
      </section>
    )
  }

}

export default TeacherForm;