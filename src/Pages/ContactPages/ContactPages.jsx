import "./ContactPages.css";
import React, { useEffect, useState } from 'react'

const ContactPages = () => {
  const [contact, setContact] = useState([]);
  useEffect(()=>{
    fetch("https://6a0bc87e5aa893e1015a7b82.mockapi.io/contacts")
    .then(response => response.json())
    .then(contact =>{
      setContact(contact)
      console.log(contact);
      
    })
  })
  return (
   {contacts.map((el) => (
  <div className="student" key={el.id}> 
    <h1 className="student-title">{el.name}</h1>

    <p className="contact-phone">
      <strong>Tel:</strong> {el.number}
    </p>
    <p className="contact-email">
      <strong>Email:</strong> {el.email}
    </p>
    
    <a className="id" href="#">ID: {el.id}</a>
  </div>
))}
  )
}

export default ContactPages