console.log('Hello from site.js')

document.querySelector('#fetch-pokemon').addEventListener('click', async () => {

const pokemon = await getRandomPokemon()
renderPokemon(pokemon)
})

const getRandomPokemon = async () => {
    try{       
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    const response = await fetch(url)
    const pokemon = await response.json()
    return pokemon
    console.log(pokemon)
    }
    catch(error){
        console.error(error)
    }
}

const renderPokemon = (pokemon) => {
    if(!pokemon) return
    //div element display
    const div = document.querySelector(".pokemon-container")
    div.innerHTML = ''

    //nameElement display
    const nameElement = document.createElement('h2')
    nameElement.classList.add('name')
    nameElement.innerText = pokemon.name


    const img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name

    const details = document.createElement('span')
    details.classList.add('details')
    details.textContent = pokemon.types.map(type => type.type.name).join(', ')

    div.appendChild(nameElement);
    div.appendChild(img);
    div.appendChild(details);

}


