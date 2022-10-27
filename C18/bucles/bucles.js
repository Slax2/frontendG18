
// for (let i = 0; i < 10; i++) {
//     console.log("incremento " + i);
// }


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }


//array de objetos

const laptops = [{
    marca: "acer",
    modelo: "prueba",
    precio: 5000,
}, {
    marca: "HP",
    modelo: "prueba",
    precio: 3000,
},
{
    marca: "Toshiba",
    modelo: "pru",
    precio: 7000,
}]

for (let i = 0; i < laptops.length; i++) {

    console.log(laptops[i].marca);

}

//MAP
const productos = [
    {
        name: "tv",
        price: 1800,
    },
    {
        name: "celular",
        price: 2000,
    },
    {
        name: "monitor",
        price: 1200,
    }
]

productos.map((productos, index) => {
    console.log("indice", index)
    console.log("producto", productos.name)
})

for (let i = 0; i < productos.length; i++) {
    console.log("precio", productos[i].price)
}

///WHILE
let contador = 0;
while (contador < 5) {
    console.log("contador", contador)
    contador++
}

//foreach

productos.forEach((productos, index) => {
    console.log("🚀ndex", index)
    console.log("🚀productos", productos.name)
});