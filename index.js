//DESARROLLA AQUI TUS SOLUCIONES

//Ejercicio 1
async function getRandomPokemon() {
    const randomNumber = Math.floor((Math.random() * 1025) + 1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const randomPokemon = await res.json()
    return randomPokemon
}
// getRandomPokemon().then(randomPokemon=>console.log(randomPokemon))

//Ejercicio 2
async function getImageAndName(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonObjeto = await res.json()
    return {
        img: pokemonObjeto.sprites.front_default,
        name: pokemonObjeto.name
    }
}
// getImageAndName().then(pokemon=>console.log(pokemon))


// Ejercicio 3
async function printImageAndName(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (!res.ok) {
    console.error("Pokemon no encontrado");
    return `<section>
            <img src="algo" alt="algo">
            <h1>algo</h1>
            </section>`;
    } else{
    const conversionPokemon = await res.json()
    const pokemonObjeto = {
        img: conversionPokemon.sprites.front_default,
        name: conversionPokemon.name
    }
    return `<section>
                <img src="${pokemonObjeto.img}" alt="${pokemonObjeto.name}">
                <h1>${pokemonObjeto.name}</h1>
            </section>`
            }
}

// printImageAndName("pikachu").then(pokemon=>console.log(pokemon))