import "./TeachersPages.css";
import React, { useEffect, useState } from 'react'

const TeachersPages = () =>{
  const [teachers, setTeachers]= useState([]);
    useEffect(() =>{
      fetch("https://6a0bc87e5aa893e1015a7b82.mockapi.io/Teachers")
      .then(response => response.json())
      .then(teacher =>{
        setTeachers(teachers)
        console.log(teachers);
        
      })
    })

  return (
    <div className="teacher-wrapper">
      <div className="teacchers">
        {students.map((el)=>(
          <div className="teacher" key={el.id}>
    
            <img className="rasm" src={el.avatar} alt="rasm" />
            <h1 className="teacher-title">{el.name}</h1>
             <a className="id" href="#">{el.id}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeachersPages