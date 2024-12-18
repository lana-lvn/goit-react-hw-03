import { useEffect, useState } from 'react';
import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';


const INITIAL_CONTACTS = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

const App = () => {
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return INITIAL_CONTACTS;
  });

  useEffect(() => { window.localStorage.setItem("saved-contacts", JSON.stringify(contacts))}, [contacts]);
  
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = (contactId) => {
    setContact(prev => (
      prev.filter(contact => contact.id !== contactId)
    ))
    
  };

  return (<div className="wrapper">
    <h1 className="title">Phonebook</h1>
    <ContactForm onAdd={setContact} />
    <SearchBox value={filter} onFilter={setFilter} />
    <ContactList contacts={visibleContacts} onDelete={deleteContact} />
  </div>);






};

export default App;