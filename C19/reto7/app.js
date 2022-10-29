
const productos = [
    {
        nombre: "zapatillas",
        precio: 1800,
    },
    {
        nombre: "play",
        precio: 2000,
    },
    {
        nombre: "mouse",
        precio: 1200,
    }
];

const personas = [
    {
        nombre: "Mario",
        edad: 18,
    },
    {
        nombre: "Juan",
        edad: 20,
    },
    {
        nombre: "Rosa",
        edad: 12,
    }
];
// recorrido FOR
const ul1 = document.getElementById('ul_primero');
for (let i = 0; i < productos.length; i++) {

    ul1.innerHTML += "<li>" + productos[i].nombre + "</li>";

}
const ul2 = document.getElementById('ul_segundo');
for (let i = 0; i < personas.length; i++) {

    ul2.innerHTML += "<li>" + personas[i].nombre + "</li>";

}
// recorrido foreach
productos.forEach(element => {
    console.log(element.nombre);
});

personas.forEach(element => {
    console.log(element.nombre);
});


// recorrido map
productos.map(element => {
    console.log(element.nombre);
});

personas.map(element => {
    console.log(element.nombre);
});
