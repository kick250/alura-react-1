import './index.css';
import TextField from '../TextField';
import React from 'react';
import DropdownList from '../DropdownList';
import SubmitButton from '../SubmitButton';


class TeacherForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      office: '',
      imageLink: '',
      team: ''
    };
  }

  render() {
    return (
      <section className='teacher-form'>
        <form onSubmit={event => this.addTeacher(event)}>
          <h2>Preencha os dados do colaborador</h2>
          <TextField value={this.state.name} required={true} change={event => this.setName(event)} label='Nome' placeholder='Digite o nome' />
          <TextField value={this.state.office} required={true} change={event => this.setOffice(event)} label='Cargo' placeholder='Digite o cargo' />
          <TextField value={this.state.imageLink} required={true} change={event => this.setImageLink(event)} label='Imagem' placeholder='Digite o link da imagem' />
          <DropdownList value={this.state.team} required={true} change={event => this.setTeam(event)} label='Time' options={this.teamNames()}/>
          <SubmitButton>Criar card</SubmitButton>
        </form>
      </section>
    )
  }

  teamNames() {
    const teams = this.props.teams ? this.props.teams : []

    return teams.map(team => team.name)
  }

  setName(event) {
    const name = event.target.value;
    this.setState({name})
  }

  setOffice(event) {
    const office = event.target.value;
    this.setState({office})
  }

  setImageLink(event) {
    const imageLink = event.target.value;
    this.setState({imageLink})
  }

  setTeam(event) {
    const team = event.target.value;
    this.setState({team})
  }

  addTeacher(event) {
    event.preventDefault();

    const teacher = {
      name: this.state.name,
      office: this.state.office,
      imageLink: this.state.imageLink,
      team: this.state.team,
    }
    this.props.onSave(teacher);
  }

}

export default TeacherForm;