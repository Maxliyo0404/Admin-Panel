import "./StudentPages.css"
import React, { useEffect, useState } from 'react'

const StudentPages = () => {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    fetch("https://6a0bb62a5aa893e1015a6639.mockapi.io/Students")
    .then(response => response.json())
    .then(student =>{
      setStudents(students)
      console.log(students);
      
    })
  })
  return (
    <div className="students-wrapper">
      <div className="students">
        {students.map((el)=>(
          <div className="student" key={el.id}>
    
            <img className="rasm" src={el.avatar} alt="rasm" />
            <h1 className="student-title">{el.name}</h1>
             <a className="id" href="#">{el.id}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentPages