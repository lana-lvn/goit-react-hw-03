// import React from 'react'

import Contact from "../Contact/Contact";
import s from "./contactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (<li className={s.contactItem} key={contact.id}><Contact name={contact.name} number={contact.number}/></li>))}
      
    </ul>
  )
}

export default ContactList;
