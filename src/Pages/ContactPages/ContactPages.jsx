import "./ContactPages.css";
import React, { useEffect, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPages = () => {
  const [contact, setContact] = useState([]);
  useEffect(()=>{
    fetch("https://6a0bc87e5aa893e1015a7b82.mockapi.io/contacts")
    .then(response => response.json())
    .then(contact =>{
      setContact(contact)
      console.log(contact);
      
    })
  });
  return (
    <div className="contact-wrapper">
      <div className="contacts">
          {contact.map((el) => (
  <div className="contact" key={el.id}> 
    <h1 className="contact-title">{el.name}</h1>

    <p className="contact-phone">
      <strong className="strong"><FaPhoneAlt /></strong> {el.number}
    </p>
    <a className="contact-email" href="#"><strong className="strong"><MdOutlineMailOutline /></strong> {el.email}</a>
    
    
  
  </div>
))}
      </div>
    </div>
  
  )
}

export default ContactPages