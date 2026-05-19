import "./StudentPages.css"
import React, { useEffect, useState } from 'react'

const StudentPages = () => {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    fetch("https://6a0bb62a5aa893e1015a6639.mockapi.io/Students")
    .then(response = response.json())
    .then(student =>{
      setStudents(student)
      console.log();
      
    })
  })
  return (
    <div className="students-wrapper">
      <div className="students">
        {students.map((el)=>(
          <div className="student" key={el.id}>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentPages