import { Link } from "react-router-dom";
import "./Sidebar.css";
import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
function Sidebar() {
  return (
    <div className="container">
        <h1 className="sidebar-title">Logo</h1>
        <ul className="sidebar-list">
            <li><Link className="sidebat-link" to="contacts">  <FaPhone /> Contacts</Link></li>
            <li><Link className="sidebat-link" to="teachers">Teachers <GiTeacher /> </Link></li>
            <li><Link className="sidebat-link" to="students">Students <PiStudentBold /> </Link></li>
        </ul>
    </div>
  )
}

export default Sidebar