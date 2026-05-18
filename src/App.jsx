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
      <Routes path="/" element={<Layout/>}/> 
       <Route>
        <Route path="contact" element={<Contacts/>}/>
        <Route path="contact" element={<Contacts/>}/>
        <Route path="contact" element={<Contacts/>}/>

       </Route>
      
      
      <Routes/>
      </BrowserRouter>
     </>
  )
}

export default App