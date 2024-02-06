import React,{ Component } from "react";
import Form from "./Phoonebook/Form/Form";
import Filter from "./Phoonebook/Filter/Filter";
import Section from "./Phoonebook/Section/Section";
import UserList from "./Phoonebook/UserList/UserList";

class AppPhoneBook extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  createUser = (data) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))
  }

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    })
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter) || 
      contact.number.toLowerCase().includes(normalizedFilter),
    );
  }

  removeContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }
  
 render() {
    const { filter, contacts } = this.state;
  
    const visibleContact = this.getVisibleContacts();

  return (
    <div>
      <Section title="Phonebook">
        <Form createUser={this.createUser} contacts={contacts}/>
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} changeFilter={this.changeFilter}/>
        <UserList contacts={visibleContact} removeContact={this.removeContact}/>
      </Section>
    </div>
  )
 }
};

export default AppPhoneBook;