

const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemonli">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li >

    
    `  
              
}

const pokemonOl = document.getElementById('pokemonlist')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {

        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            //console.log(convertPokemonToLi(pokemon))
            pokemonOl.innerHTML += convertPokemonToLi(pokemon)

           
        }


    })
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição concluída'))






