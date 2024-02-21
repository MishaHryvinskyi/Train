import Notiflix from "notiflix";
import { useState } from "react";
import { ImSearch } from 'react-icons/im'

export const PokemonForm = ({ onSubmit }) => {
    const [pokemonName, setPokemonName] = useState('');
    
    const handleChange = event => {
        const { value } = event.currentTarget;
        setPokemonName(value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if(pokemonName.trim() === "") {
            Notiflix.Notify.failure("Введіть ім'я покемона!!!", {
                timeout: 3000,
              },)
            return;
        }
        
        onSubmit(pokemonName);
        setPokemonName('');
    };

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="pokemonName"
                    value={pokemonName}
                    onChange={handleChange}
                />
                <button type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Пошук
                </button>
            </form>
        )
}

// classes component 

// import Notiflix from "notiflix";
// import React, { Component } from "react";
// import { ImSearch } from 'react-icons/im'

// export default class PokemonForm extends Component {
//     state = {
//         pokemonName : '',
//     };

//     handleChange = event => {
//         const { value } = event.currentTarget;
//         this.setState({ pokemonName: value.toLowerCase() });
//     };

//     handleSubmit = event => {
//         const { pokemonName } = this.state;
//         event.preventDefault();

//         if(this.state.pokemonName.trim() === "") {
//             Notiflix.Notify.failure("Введіть ім'я покемона!!!", {
//                 timeout: 3000,
//               },)
//             return;
//         }
         
//         this.props.onSubmit(pokemonName);
//         this.setState({ pokemonName: '' });
//     };

//     render() {
//         const { pokemonName } = this.state;
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                     type="text"
//                     name="pokemonName"
//                     value={pokemonName}
//                     onChange={this.handleChange}
//                 />
//                 <button type="submit">
//                     <ImSearch style={{ marginRight: 8 }} />
//                     Пошук
//                 </button>
//             </form>
//         )
//     }
// }