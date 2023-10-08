import TeacherCard from '../TeacherCard';
import './index.css';

const TeamView = (props) => {
  const { team, teachers } = props;

  function isEmpty() {
    return teachers.length === 0
  }

  return (
    <section className='team-view' style={{ backgroundColor: team.secondaryColor }} hidden={isEmpty()}>
      <h3 style={{ borderColor: team.primaryColor }}>
        {team.name}
      </h3>
      <div className='teachers-list'>
        {
          teachers.map(teacher =>
            <TeacherCard teacher={teacher} color={team.primaryColor} key={teacher.name} />
          )
        }
      </div>
    </section>
  )
};

export default TeamView;