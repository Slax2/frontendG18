class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    quienSoy() {
        console.log(`Mi nombres es: ${this.nombre} y mi edad es : ${this.edad}`)
    }


}

const moises = new Persona('moises', 'salas');
console.log("🚀 ~ file: main.js ~ line 16 ~ moises", moises)

moises.quienSoy();

