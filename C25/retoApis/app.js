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

const color = {
    red: "rgba(255, 48, 50, 0.6)",
    green: "rgba(83, 180, 50, 0.6)",
    blue: "rgba(113, 104, 226, 0.6)",
    brown: "rgba(113, 104, 226, 0.6)",
    purple: "rgba(113, 104, 226, 0.6)",
    pink: "rgba(100, 10, 10, 0.6)",
    yellow: "rgba(229, 216, 0, 0.6)",
};
const obtenerColor = async (id) => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + id)
        const data = await response.json();

        return (color[data.color.name]);

    } catch (error) {
        console.log(error)

    }
}

const DetalleModal = async (url) => {

    try {
        const response = await fetch(url);
        const data = await response.json();
        const modal = document.querySelector(".modal-dialog");
        console.log("🚀 ~ file: app.js ~ line 47 ~ DetalleModal ~ data", data)
        modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-body">
                <h1 class="modal-title fs-5 text-center">${data.name}</h1>
                <img src="${data.sprites.other.home.front_default}"
                    class="card-img-top my-2" height="300">

            </div>
            <div class="modal-footer">
                <div class="container">
                        <div class="row text-center">
                            <div class="col-4">
                                <span>Peso:</span>
                            </div>
                            <div class="col-4">
                                <span>Habilidad:</span>
                            </div>
                            <div class="col-4">
                                <span>Tipo:</span>
                            </div>
                        </div>
                        <br>
                        <div class="row text-center">
                            <div class="col-4">
                                <span>Peso:</span>
                            </div>
                            <div class="col-4">
                                <span>Habilidad:</span>
                            </div>
                            <div class="col-4">
                                <span>Tipo:</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>`;


    } catch (error) {
        console.log(error)
    }


}

const datosPokemon = async () => {
    const resultado = await obtenerPokemones();
    console.log("🚀 ~ file: app.js ~ line 98 ~ datosPokemon ~ resultado", resultado)

    for (let i = 0; i < resultado.length; i++) {
        const color = await obtenerColor(i + 1);
        containerPokemon.innerHTML +=
            `<div class="col-4 mb-3">
    <div class="card" style="background-color:${color};">
        <img height="300" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg"
            class="card-img-top my-2">
        <div class="card-body">
            <h5 class="card-title">${resultado[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">Número: ${i + 1}</h6>
            <p class="card-text"></p>
        </div>
        <button class="btn w-100 bg-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="DetalleModal('${resultado[i].url}')" id="modal">Detalle</button>

    </div>
</div>`;

    }

}

datosPokemon();


