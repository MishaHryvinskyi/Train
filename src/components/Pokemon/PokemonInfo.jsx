import { useEffect, useState } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import { fetchPokemon } from "components/api/pokemon-api";

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}

export const PokemonInfo = ({ pokemonName }) =>  {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(Status.IDLE);

    useEffect(() => {
        if(!pokemonName) {
            return;
        }
        setStatus(Status.PENDING);
            fetchPokemon(pokemonName)
            .then(pokemon => {
                setPokemon(pokemon);
                setStatus(Status.RESOLVED);
            })
            .catch(error => {
                setError(error);
                setStatus(Status.REJECTED);
            });   

    }, [pokemonName])
    
        if(status === Status.IDLE) {
            return <p>Введіть ім'я поекмона!</p>
        }

        if(status === Status.PENDING) {
            return <h2>Загружаємо...</h2>
        }
        
        if (status === Status.REJECTED) {
            return <PokemonErrorView message={error.message} />
        }

        if (status === Status.RESOLVED) {
            return (
            <PokemonDataView pokemon={pokemon} />
            )
        }
}


// Classes component 

// import React, { Component } from "react";
// import PokemonErrorView from "./PokemonErrorView";
// import PokemonDataView from "./PokemonDataView";
// import { fetchPokemon } from "components/api/pokemon-api";

// const Status = {
//     IDLE: 'idle',
//     PENDING: 'pending',
//     RESOLVED: 'resolved',
//     REJECTED: 'rejected',
// }

// export default class PokemonInfo extends Component {
//     state = {
//         pokemon: null,
//         error: null,
//         status: Status.IDLE,
//     }

//     componentDidUpdate(prevProps, prevState) {
//         const prevName = prevProps.pokemonName;
//         const nextName = this.props.pokemonName;
//         if (prevName !== nextName) {
//                 this.setState({ status: Status.PENDING });

//                 fetchPokemon(nextName)
//                 .then(pokemon => this.setState({ pokemon, status: Status.RESOLVED }))
//                 .catch(error => this.setState({ error, status: Status.REJECTED}));   
//         }
//     }

//     render() {
//         const { pokemon, error, status } = this.state;

//         if(status === 'idle') {
//             return <p>Введіть ім'я поекмона!</p>
//         }

//         if(status === 'pending') {
//             return <h2>Загружаємо...</h2>
//         }
        
//         if (status === 'rejected') {
//             return <PokemonErrorView message={error.message} />
//         }

//         if (status === 'resolved') {
//             return (
//             <PokemonDataView pokemon={pokemon} />
//             )
//         }
//     }
// }