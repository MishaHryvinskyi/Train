export async function fetchPokemon(nextName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
    if (response.ok) {
        return response.json()
    }
    return await Promise.reject(
        new Error(`Немає покемона з ім'ям ${nextName}`))
}