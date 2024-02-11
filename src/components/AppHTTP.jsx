import React, { Component } from "react";

class AppHTTP extends Component {
    state = {
        pokemon: null,
        loading: false,
    }

    componentDidMount () {
        this.setState({ loading: true });

        setTimeout(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/122')
            .then(response => response.json())
            .then(pokemon => this.setState({pokemon}))
            .finally(() => this.setState({ loading: false }));
        }, 1000);
    }

    render() {
        const { pokemon, loading } = this.state;
        return (
            <div>
                {loading && <h1>Загружаємо...</h1>}
                {pokemon && (
                <div>
                    <h2>Name: {pokemon.name}</h2> 
                    <h3>Order: {pokemon.order}</h3>
                    <img src={pokemon.sprites.back_default} alt="" />
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>)}
            </div>
        )
    }
}

export default AppHTTP;