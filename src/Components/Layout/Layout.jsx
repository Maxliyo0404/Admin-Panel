import { Outlet } from "react-router-dom";
import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


function Layout() {
  return (
    <div className="layout-wrapper">
      <aside className="sidibar-aside">
          <Sidebar/>
      </aside>
       
     <div className="main-wrapper">
         <Header/> 
    <main className="contet-body">
            <Outlet/>
        </main>

     </div>
         
    
    </div>
  )
}

export default Layout