import React, { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import { fetchPokemon } from "components/api/pokemon-api";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if (prevName !== nextName) {
                this.setState({ status: 'pending' });

                fetchPokemon(nextName)
                .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
                .catch(error => this.setState({ error, status: 'rejected'}));   
        }
    }

    render() {
        const { pokemon, error, status } = this.state;

        if(status === 'idle') {
            return <p>Введіть ім'я поекмона!</p>
        }

        if(status === 'pending') {
            return <h2>Загружаємо...</h2>
        }
        
        if (status === 'rejected') {
            return <PokemonErrorView message={error.message} />
        }

        if (status === 'resolved') {
            return (
            <PokemonDataView pokemon={pokemon} />
            )
        }
    }
}