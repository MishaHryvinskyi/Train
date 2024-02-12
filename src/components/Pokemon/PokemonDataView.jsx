export default function PokemonDataView ({ pokemon }) {
    return (
            <div>
                <h2>Pokemon name: {pokemon.name}</h2>
                <img width={300} src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
            </div>
    )
}