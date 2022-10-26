function sumar(numero1, numero2) {

    const converNumero1 = +numero1;
    const converNumero2 = +numero2;

    const suma = converNumero1 + converNumero2;

    return suma;

}

console.log(sumar(10, 20))


///1 PROBLEMA
const sumar2 = (a, b) => {
    return a + b;
}

console.log("suma", sumar2(10, 10))


//2 problema
const promedio = (a = 0, b = 0, c = 0, d = 0) => {

    return (a + b + c + d) / 4

}

console.log("Promedio notas", promedio(10, 20, 15, 10));
//3 problema

const rectangulo = (base, altura) => {
    return base * altura;
}

console.log("Rectangulo", rectangulo(10, 10))

//4 problema
const triangulo = (base, altura) => {
    return (base * altura) / 2;
}

console.log("triangulo", triangulo(10, 10))


//5 problema

const circulo = (radio) => {

    return (3.14 * Math.pow(radio, 2));
}

console.log("circulo", circulo(5))

//6 problema

const sueldo = (horas, salario) => {

    const horasSemanal = 56;

    if (horas > horasSemanal || horas < 0) {
        return "Horas ingresadas no permitidas"
    } else {
        return horas * salario;
    }

}

console.log("sueldo", sueldo(40, 5))

//7 problema

const pulgadas = (tela) => {

    const pulgadas = 0.0254;

    const convertir = pulgadas * tela;

    return convertir;


}

console.log("pulgadas", pulgadas(50))


//8 problema

const dolar = (tipocambio, efectivo) => {

    return efectivo / tipocambio;


}

console.log("dolar", dolar(3.96, 50))