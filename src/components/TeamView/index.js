import './index.css';

const TeamView = (props) => {
  const { team } = props;

  return (
    <section className='team-view' style={{ backgroundColor: team.secondaryColor }}>
      <h3 style={{ borderColor: team.primaryColor }}>
        {team.name}
      </h3>
    </section>
  )
};

export default TeamView;