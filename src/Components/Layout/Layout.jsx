import { Outlet } from "react-router-dom";
import "./Layout.css";
import React, { useState } from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


function Layout() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="layout-wrapper">
      <aside className="sidibar">
          <Sidebar/>
      </aside>
       
     <div className="main-wrapper">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> 
    <main className="contet-body">
            <Outlet context={[searchTerm]} />
        </main>

     </div>
         
    
    </div>
  )
}

export default Layout