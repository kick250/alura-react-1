import { useState } from 'react';
import Banner from './components/Banner';
import TeacherForm from './components/TeacherForm';
import TeamView from './components/TeamView';


function App() {
  function addTeacher(teacher) {
    setTeachers([...teachers, teacher]);
  }

  function getTeachersFrom(team) {
    return teachers.filter(teacher => teacher.team === team.name);
  }

  function renderTeams() {
    return teams.map(team => <TeamView team={team} key={team.id} teachers={getTeachersFrom(team)} /> )
  }


  const teams = [
    { id: '1', name: "Programação", primaryColor: '#57C278', secondaryColor: '#D9F7E9'},
    { id: '2', name: "Front-end", primaryColor: '#82CFFA', secondaryColor: '#E8FBFF'},
    { id: '3', name: "Back-end", primaryColor: '#A6D157', secondaryColor: '#F0F8E2'},
    { id: '4', name: "Design", primaryColor: '#E05B69', secondaryColor: '#FDE7E8'},
  ]

  const [teachers, setTeachers] = useState([]);

  return (
    <div className="App">
      <Banner />
      <TeacherForm onSave={addTeacher} teams={teams}/>
      {renderTeams()}
    </div>
  );
}

export default App;
