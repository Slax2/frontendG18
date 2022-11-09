// fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
//     .then(response => response.json())
//     .then(result => console.log(result.results))
//     .catch(error => console.log('error', error));
const containerPokemon = document.querySelector(".container-pokemon");
const obtenerPokemones = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        const data = await response.json();

        return (data.results);

    } catch (error) {
        console.log(error)

    }
}
const obtenerColor = async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        const data = await response.json();

        return (data.results);

    } catch (error) {
        console.log(error)

    }
}

const datosPokemon = async () => {
    const resultado = await obtenerPokemones();

    for (let i = 1; i <= resultado.length; i++) {

        containerPokemon.innerHTML += `<div class="col-4 mb-3">
    <div class="card">
        <img height="300" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i}.svg"
            class="card-img-top my-2">
        <div class="card-body">
            <h5 class="card-title">${resultado[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Número: ${i}</h6>
            <p class="card-text"></p>
        </div>

    </div>
</div>`;

    }




}

datosPokemon();
