import { useOutletContext } from "react-router-dom";
import "./StudentPages.css"
import React, { useEffect, useState } from 'react'

const StudentPages = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm] = useOutletContext()
  useEffect(()=>{
    fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Students")
    .then(response => response.json())
    .then(students =>{
      setStudents(students)
      console.log(students);
      
    })
  },[]);
   const filteredStudents = students.filter((el)=>{
    if(!el.name) return false;
    const searchInLowercase = searchTerm.toLowerCase();
    const nameParts = el.name.toLowerCase().split(" ");
    return nameParts.some((part)=> part. startsWith(searchInLowercase));
   });
  return (
    <div className="students-wrapper">
      <div className="students">
        {filteredStudents.map((el)=>(
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