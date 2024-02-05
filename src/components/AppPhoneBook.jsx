import React,{ Component } from "react";
import Form from "./Phoonebook/Form/Form";
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
  }

  createUser = (data) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))
  }
  
 render() {
    const { contacts } = this.state;
  return (
    <div>
      <Section title="Phonebook">
        <Form createUser={this.createUser}/>
      </Section>
      <Section title="Contacts">
        <UserList contacts={contacts}/>
      </Section>
    </div>
  )
 }
};

export default AppPhoneBook;