import { nanoid } from "nanoid";
import React, { Component } from "react";
import { FormEl } from "./Form.styled";

class Form extends Component {
    state = {
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
        this.props.createUser({
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        })
        this.reset();
      }
    
      reset = () => {
        this.setState({
          name: '',
          number: ''
        })
      }

    render() {
        return (
            <FormEl onSubmit={this.handleSubmit}>
          <label htmlFor="name">
                Name
                <input 
                  id="name" 
                  type="text" 
                  name="name" 
                  required 
                  onChange={this.createContact}
                  value={this.state.name}
                  placeholder="Enter name"
                /> 
          </label>

          <label htmlFor="number">
                Number
                <input 
                  id="number" 
                  type="tel" 
                  name="number" 
                  required 
                  onChange={this.createContact}
                  value={this.state.number}
                  placeholder="Enter phone number"
                /> 
          </label>
          
          <button onClick={this.createContact} type="submit">Add contact</button>
        </FormEl>
        )
    }
}

export default Form;