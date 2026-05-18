import { Link } from "react-router-dom";
import "./Sidebar.css";
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
function Sidebar() {
  return (
    <div className="container">
        <h1 className="sidebar-title">Logo</h1>
        <ul className="sidebar-list">
            <li><Link className="sidebat-link" to="contacts">Contacts <FaPhone /> </Link></li>
            <li><Link className="sidebat-link" to="teachers">Teachers <GiTeacher /> </Link></li>
            <li><Link className="sidebat-link" to="students">Students  </Link></li>
        </ul>
    </div>
  )
}

export default Sidebar