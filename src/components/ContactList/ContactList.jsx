// import React from 'react'

import Contact from "../Contact/Contact";
import s from "./contactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (<li className={s.contactItem} key={contact.id}><Contact id={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} /></li>))}
      
    </ul>
  )
}

export default ContactList;
