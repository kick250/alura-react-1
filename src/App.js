import { useState } from 'react';
import Banner from './components/Banner';
import TeacherForm from './components/TeacherForm';


function App() {
  const [teachers, setTeachers] = useState([]);

  function addTeacher(teacher) {
    setTeachers([...teachers, teacher]);
    console.log(teachers)
  }

  return (
    <div className="App">
      <Banner />
      <TeacherForm onSave={addTeacher}/>
    </div>
  );
}

export default App;
