import "./App.css";
import React from 'react'
import Layout from "./Components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   
      <BrowserRouter>
      <Routes path="/" element={<Layout/>}/> 
       <Route>
        <Route path="" element={}/>

       </Route>
      
      
      <Routes/>
      </BrowserRouter>
     </>
  )
}

export default App