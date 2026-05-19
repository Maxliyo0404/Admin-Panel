import "./ContactPages.css";
import React, { useEffect, useState } from 'react'

const ContactPages = () => {
  const [contact, setContact] = useState([]);
  useEffect(()=>{
    fetch("")
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