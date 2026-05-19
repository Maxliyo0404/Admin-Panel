import "./Header.css";
import React from 'react'


function Header({searchTerm, setSearchTerm}) {
  return (
    <header className="header">
   <div className="header-container">
    <form className="form" onSubmit={(event)=> event.preventDefault()}>
      <input className="input" type="text" required placeholder="Search...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    </form>
    <button className="button">Dowload CV</button>
   </div>
    </header>
  )
}

export default Header
