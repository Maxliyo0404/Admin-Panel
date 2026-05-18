import "./App.css";
import React from 'react'
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./Pages/ContactPages/ContactPages";
import Teachers from "./Pages/Teacherspage/TeachersPages";
import Students from "./Pages/StudentsPages/StudentPages";


function App() {
  return (
    <>
   
      <BrowserRouter>
      <Routes> 
       <Route path="/" element={<Layout/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="teachers" element={<Teachers/>}/>
        <Route path="students" element={<Students/>}/>

      
      
      </Routes>
      </BrowserRouter>
     </>
  )
}

export default App