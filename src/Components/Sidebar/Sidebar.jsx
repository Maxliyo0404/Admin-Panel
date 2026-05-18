import { Link } from "react-router-dom";
import "./Sidebar.css";
import React from 'react'
function Sidebar() {
  return (
    <div className="container">
        <h1 className="sidebar-title">Logo</h1>
        <ul className="sidebar-list">
            <li><Link className="sidebat-link" to="contact"></Link></li>
            <li><Link className="sidebat-link" to="contact"></Link></li>
            <li><Link className="sidebat-link" to="contact"></Link></li>
        </ul>
    </div>
  )
}

export default Sidebar