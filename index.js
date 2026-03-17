// //DESARROLLA AQUI TUS SOLUCIONES

// Ejercicio 1
async function getRandomPokemon() {
    const randomNumber = Math.floor((Math.random() * 1025) + 1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    const randomPokemon = await res.json()
    return randomPokemon
}
// getRandomPokemon().then(randomPokemon=>console.log(randomPokemon))

// Ejercicio 2
async function getImageAndName(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonObjeto = await res.json()
    return {
        img: pokemonObjeto.sprites.front_default,
        name: pokemonObjeto.name
    }
}
// getImageAndName("pikachu").then(pokemon=>console.log(pokemon))


// Ejercicio 3
async function printImageAndName(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (!res.ok) {
    console.error("Pokemon no encontrado");
    return `<section>
            <img src="error" alt="error">
            <h1>Pokemon no encontrado</h1>
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

// Ejercicio 4
async function getRandomDogImage(){
    try{
    const res = await fetch ("https://dog.ceo/api/breeds/image/random");
    const data = await res.json()
    return data.message
    }
    catch(error){
        console.error("Error:", error)
        return "Error";
    }
    
}
// getRandomDogImage().then((data)=>console.log(data))

// Ejercicio 5
async function getRandomPokemonImage() {
    const randomNumber = Math.floor((Math.random() * 1025) + 1);
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
    const data = await res.json()
    return data.sprites.front_default
}
// getRandomPokemonImage().then((data)=> console.log(data))

// Ejercicio 6


// Ejercicio 7
async function getRandomCharacter() {
    const randomNumber = Math.floor((Math.random() * 826) + 1);
    const res = await fetch (`https://rickandmortyapi.com/api/character/${randomNumber}`)
    const data = await res.json()
    return data
}
// getRandomCharacter().then((data) => console.log(data))

// Ejercicio 8
async function getRandomCharacterInfo() {
    const randomNumber = Math.floor((Math.random() * 826) + 1);

    const res1 = await fetch (`https://rickandmortyapi.com/api/character/${randomNumber}`)
    const data1 = await res1.json()

    const res2 = await fetch(data1.episode[0]);
    const data2 = await res2.json()

    return {
        img: data1.image,
        name: data1.name,
        episodes: data1.episode,
        firstEpisode: data2.name,
        dateEpisode: data2.air_date
    }
}
// getRandomCharacterInfo().then((resultado) => console.log(resultado))

// Ejercicio 9
