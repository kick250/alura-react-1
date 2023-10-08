import './index.css'

function TeacherCard({teacher, color}) {
  return (
    <div className='teacher-card'>
      <div className='card-header' style={{ backgroundColor: color }}>
        <img src={teacher.imageLink} alt='Profile image' />
      </div>
      <div className='card-body'>
        <h4>{teacher.name}</h4>
        <h5>{teacher.office}</h5>
      </div>
    </div>
  )
}

export default TeacherCard;