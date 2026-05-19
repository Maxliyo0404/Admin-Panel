import "./StudentPages.css"
import React, { useEffect, useState } from 'react'

const StudentPages = () => {
  const [students, setStudents] = useState([]);
  useEffect(()=>{
    fetch("https://6a0bb62a5aa893e1015a6639.mockapi.io/Students")
  })
  return (
    <div></div>
  )
}

export default StudentPages