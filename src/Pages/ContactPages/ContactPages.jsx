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
    <div>ContactPages</div>
  )
}

export default ContactPages