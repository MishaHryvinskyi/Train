import React, { Component } from "react";
import PokemonForm from "./Pokemon/PokemonForm";
import PokemonInfo from "./Pokemon/PokemonInfo";

class AppHTTP extends Component {
     state = {
        pokemonName: '',
     }

    handleSearchFormSubmit = (pokemonName) => {
        this.setState({ pokemonName });
    }

    render() {
        return (
            <div>
                <PokemonForm onSubmit={this.handleSearchFormSubmit}/>
                <PokemonInfo pokemonName={this.state.pokemonName}/>
            </div>
        )
    }
}

export default AppHTTP;