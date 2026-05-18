import "./Header.css";
import React from 'react'


function Header() {
  return (
    <header className="header">
   <div className="header-container">
    <form className="form">
      <input type="text" required placeholder="Name is your ...." />
    </form>
   </div>
    </header>
  )
}

export default Header