import { nanoid } from "nanoid";
import { useState } from "react";
import { FormEl } from "./Form.styled";
import Notiflix from "notiflix";

export const Form = ({ contacts, createUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');



    const createContact = ({ target }) => {
      setName({
            [target.name]: target.value,
        })

        setNumber({
          [target.name]: target.value,
      })
      }
    
      const handleSubmit = event => {
        event.preventDefault();

        const isDuplicateName = contacts.some(
          contact => contact.name === name
        );

        if (isDuplicateName) {
          Notiflix.Notify.warning(`${name} is already in contacts.`,{
            timeout: 6000,
          });
        return;
      }

      createUser({
            id: nanoid(),
            name,
            number,
        })
        Notiflix.Notify.success(`Contact ${name} successfully added`,{
          timeout: 6000,
        })
        reset();
      }
    
      const reset = () => {
        setName({
          name: '',
        })

        setNumber({
          number: '',
        })
      }

    
        return (
            <FormEl onSubmit={handleSubmit}>
          <label htmlFor="name">
                Name
                <input 
                  id="name" 
                  type="text" 
                  name="name" 
                  required 
                  onChange={createContact}
                  value={name}
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
                  onChange={createContact}
                  value={number}
                  placeholder="Enter phone number"
                /> 
          </label>
          
          <button onClick={createContact} type="submit">Add contact</button>
        </FormEl>
        )
}



// Classes component 

// import { nanoid } from "nanoid";
// import React, { Component } from "react";
// import { FormEl } from "./Form.styled";
// import Notiflix from "notiflix";

// class Form extends Component {
//     state = {
//         name: '',
//         number: ''
//     }

//     createContact = ({ target }) => {
//         this.setState({
//             [target.name]: target.value,
//         })
//       }
    
//       handleSubmit = (event) => {
//         event.preventDefault();
//         const { name } = this.state;

//         const isDuplicateName = this.props.contacts.some(
//           contact => contact.name === name
//         );

//         if (isDuplicateName) {
//           Notiflix.Notify.warning(`${name} is already in contacts.`,{
//             timeout: 6000,
//           });
//         return;
//       }

//       this.props.createUser({
//             id: nanoid(),
//             name: this.state.name,
//             number: this.state.number,
//         })
//         Notiflix.Notify.success(`Contact ${this.state.name} successfully added`,{
//           timeout: 6000,
//         })
//         this.reset();
//       }
    
//       reset = () => {
//         this.setState({
//           name: '',
//           number: ''
//         })
//       }

//     render() {
//         return (
//             <FormEl onSubmit={this.handleSubmit}>
//           <label htmlFor="name">
//                 Name
//                 <input 
//                   id="name" 
//                   type="text" 
//                   name="name" 
//                   required 
//                   onChange={this.createContact}
//                   value={this.state.name}
//                   placeholder="Enter name"
//                 /> 
//           </label>

//           <label htmlFor="number">
//                 Number
//                 <input 
//                   id="number" 
//                   type="tel" 
//                   name="number" 
//                   required 
//                   onChange={this.createContact}
//                   value={this.state.number}
//                   placeholder="Enter phone number"
//                 /> 
//           </label>
          
//           <button onClick={this.createContact} type="submit">Add contact</button>
//         </FormEl>
//         )
//     }
// }

// export default Form;