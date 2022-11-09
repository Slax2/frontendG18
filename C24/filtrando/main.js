fetch("https://alpha-meme-maker.herokuapp.com/")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

const listaInterna = () => {
    const memes = [
        {
            nombre: "Neta me lo juras?",
            imagen: "https://i.ytimg.com/vi/PmiERz5tqEU/maxresdefault.jpg",
            enlace:
                "https://c.tenor.com/werGAdQw-8sAAAAd/neta-me-lo-juras-nodding.gif",
        },

    ];

    const buscador = document.getElementById("buscador");
    const resultado = document.getElementById("resultado");


    buscador.addEventListener("keyup", (e) => {

        resultado.innerHTML = "";

        const nuevoArray = memes.filter((element) => {
            return element.nombre.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        })

        nuevoArray.map((element) => {
            resultado.innerHTML += `
            <div class = "meme-container">
                <figure class= "meme-img-container">
                    <img src ="${element.imagen}" class="meme-img" alt="${element.nombre}">
                </figure>
                <div class = "meme-info-container">
                    <h5 class = "meme-title">${element.nombre}</h5>
                        <a href = "${element.enlace}" class = "meme-boton">
                    Ver Meme</a>
                </div>
            </div>
            `;
        });

    })


};

document.addEventListener("DOMContentLoaded", listaInterna())