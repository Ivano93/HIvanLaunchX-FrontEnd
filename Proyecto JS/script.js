const pokeImg = document.getElementById("pokeImg");
const pokeName = document.getElementById("pokeName");
const pokeId = document.getElementById("pokeId");
const pokeType = document.getElementById("pokeType");
const pokeAbility = document.getElementById("pokeAbility");
const pokeInput = document.getElementById("pokeInput");

console.log("Hola");

function searchPokemon(event) {
    event.preventDefault();
    let pokemon = pokeInput.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
    fetch(url)
        .then(response => response.json())
        .then(data => renderPokemonData(data))
        .catch(error => renderNotFound())
}

function renderPokemonData(data) {
    let pokePhoto = data.sprites.front_default;
    var {abilities, types} = data;

    pokeImg.src = pokePhoto;
    pokeName.textContent = data.name;
    pokeId.textContent = `N° ${data.id}`;
    renderPokemonTypes(types);
    renderPokemonAbilities(abilities);
}

function renderPokemonTypes(types) {
    pokeType.innerHTML = "";
    types.forEach(type => {
        const typeElement = document.createElement("p");
        typeElement.textContent = type.type.name;
        pokeType.appendChild(typeElement);
    })
}

function renderPokemonAbilities(abilities) {
    pokeAbility.innerHTML = "";
    abilities.forEach(ability => {
        const abilityElement = document.createElement("p");
        abilityElement.textContent = ability.ability.name;
        pokeAbility.appendChild(abilityElement);
    })
}

function renderNotFound() {
    pokeName.textContent = "No encontrado";
    pokeImg.src = "./imgs/Default Pokemon.png"
    pokeId.textContent = "";
    pokeType.textContent = "";
    pokeAbility.textContent = "";
}
