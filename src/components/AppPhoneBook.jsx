import React,{ Component } from "react";
import { nanoid } from "nanoid";

class AppPhoneBook extends Component {
  state = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: ''
  }

  createContact = ({ target }) => {
    this.setState({
        [target.name]: target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.createUser({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
    })
  }

  createUser = (data) => {
    console.log("d",data)
  }
  
 render() {
    const { contacts } = this.state;
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
            <input 
                id="name" 
                type="text" 
                name="name" 
                required 
                onChange={this.createContact}
                value={this.state.name}
            /> 
            Name
        </label>

        <label htmlFor="number">
            <input 
                id="number" 
                type="text" 
                name="number" 
                required 
                onChange={this.createContact}
                value={this.state.number}
            /> 
            Number
        </label>
        
        <button onClick={this.createContact} type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name, number}) => (
        <li key={id}>
            <p>
                <span>{name}</span> <span>{number}</span>
            </p>
        </li>
        ))}
      </ul>
    </div>
  )
 }
};

export default AppPhoneBook;