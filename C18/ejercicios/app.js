//

function callMenu() {

    let numero_ejercicio = parseInt(prompt("ingresar número de ejercicio: \r\n 1. Suma \r\n 2. Promedio"));


    if (isNaN(numero_ejercicio)) {
        alert("Ingresar un valor correcto")
    } else {
        CallMenuEjercicios(numero_ejercicio);
    }
}

function CallMenuEjercicios(numero_ejercicio) {

    switch (numero_ejercicio) {
        case 1:
            const suma1 = parseFloat(prompt("ingresar primer valor"));
            const suma2 = parseFloat(prompt("ingresar segundo valor"));
            alert(ej1_suma(suma1, suma2));
            break;

    }

}

function ej1_suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresar datos correctos";
    } else {
        return a + b;
    }
}

