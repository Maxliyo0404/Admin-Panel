import "./Header.css";
import React from 'react'


function Header() {
  return (
    <header className="header">
   <div className="header-container">
    <form className="form">
      <input type="text" required placeholder="Search...." />
    </form>
    <button className="button">Dowload CV</button>
   </div>
    </header>
  )
}

export default Header