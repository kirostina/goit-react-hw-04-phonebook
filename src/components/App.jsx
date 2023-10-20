import  { useEffect, useState} from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

    const createContact = data => {
    const isUser = contacts.find(({name}) => name === data.name);
    if (isUser) {
      alert(`${data.name} is already associated with`);
      return;
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState([contacts, newContact]);
  };


  const contactFilter = nameUser => setFilter(nameUser);
  const filterArray = () => {
    return contacts.filter(({ name }) =>
      name
        .toLocaleLowerCase()
        .trim()
        .includes(filter.toLocaleLowerCase().trim())
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const deleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id))
  };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact}/>
  
        <h2>Contacts</h2>
        <Filter contactFilter={this.contactFilter}/>
        <ContactList arr={this.filterArray} deleteContact={this.deleteContact}/>
      </div>
    )
  }


