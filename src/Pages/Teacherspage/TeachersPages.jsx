import "./TeachersPages.css";
import React, { useEffect, useState } from 'react'

const TeachersPages = () =>{
  const [teachers, setTeachers]= useState([]);
    useEffect(() =>{
      fetch("https://6a0bc87e5aa893e1015a7b82.mockapi.io/Teachers")
      .then(response => response.json())
      .then(teacher =>{
        setTeachers(teachers)
      })
    })

  return (
    <div>TeachersPages</div>
  )
}

export default TeachersPages