import { Outlet } from "react-router-dom";
import "./Layout.css";
import React from 'react'
import Header from "../Header/Header";


function Layout() {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout