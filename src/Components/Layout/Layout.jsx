import { Outlet } from "react-router-dom";
import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";


function Layout() {
  return (
    <div>
        <Header/> 
        <Sidebar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout