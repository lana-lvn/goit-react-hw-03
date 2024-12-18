// import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import s from "./contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={s.wrap}>
      <div className={s.text}>
        <FaUser />
        <p>{name}</p>
      </div>
      <div className={s.text}>
        <FaPhone />
        <p>{number}</p>
      </div>
      </div>
      <button className={s.delete} onClick={() => onDelete(id)}>Delete</button>
    </>
   

  )
}

export default Contact;
