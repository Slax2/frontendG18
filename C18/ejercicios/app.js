//

function callMenu() {

    let numero_ejercicio = parseInt(prompt("ingresar número de ejercicio: \r\n 1. Suma \r\n 2. Promedio \r\n 3. Area de rectángulo \r\n 4. Area de triangulo \r\n 5. Area de circunferencia \r\n 6. Sueldo Semanal \r\n 7. Calcular Tela \r\n 8. Cambio Dolar \r\n 9. Determinar edad \r\n 10. Edad Menor \r\n 11. Antiguedad \r\n 12. Edad Menor \r\n 13. Notas \r\n 14. Focos \r\n 15. Votación"));


    if (isNaN(numero_ejercicio) || numero_ejercicio <= 0) {
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
        case 2:
            const exa1 = +(prompt("ingresar primer examen"));
            const exa2 = +(prompt("ingresar segundo examen"));
            const exa3 = +(prompt("ingresar tercer examen"));
            const exa4 = +(prompt("ingresar cuarto examen"));
            alert(ej2_promedio(exa1, exa2, exa3, exa4));
            break;
        case 3:
            const base = parseFloat(prompt("ingresar base"));
            const altura = parseFloat(prompt("ingresar altura"));
            alert(ej3_rectangulo(base, altura));
            break;
        case 4:
            const base2 = parseFloat(prompt("ingresar base"));
            const altura2 = parseFloat(prompt("ingresar altura"));
            alert(ej4_triangulo(base2, altura2));
            break;
        case 5:
            const radio = parseFloat(prompt("ingresar radio"));
            alert(ej5_circulo(radio));
            break;
        case 6:
            const horasTrabajadas = parseFloat(prompt("ingresar horas trabajadas"));
            const horaSalario = parseFloat(prompt("ingresar hora salario"));
            alert(ej6_sueldo(horasTrabajadas, horaSalario));
            break;
        case 7:
            const tela = parseFloat(prompt("ingresar metros de tela"));
            alert(ej7_tela(tela));
            break;
        case 8:
            const soles = parseFloat(prompt("ingresar monto en soles"));
            const tipoCambio = parseFloat(prompt("ingresar tipo cambio"));
            alert(ej8_cambio(soles, tipoCambio));
            break;
        case 9:
            const ano = parseInt(prompt("ingresar año de nacimiento"));
            alert(ej9_anio(ano));
            break;
        case 10:
            const nombre = (prompt("ingresar nombre"));
            const edad = parseInt(prompt("ingresar edad"));
            const nombre1 = (prompt("ingresar nombre"));
            const edad1 = parseInt(prompt("ingresar edad"));
            const nombre2 = (prompt("ingresar nombre"));
            const edad2 = parseInt(prompt("ingresar edad"));

            const datos = [{
                name: nombre,
                age: edad
            }, {
                name: nombre1,
                age: edad1
            }, {
                name: nombre2,
                age: edad2
            }];

            alert(ej10_menoredad(datos));
            break;
        case 11:
            const antiguedad = parseInt(prompt("ingresar antiguedad"));
            alert(ej11_antiguedad(antiguedad));
            break;
        case 12:
            const salario = parseInt(prompt("ingresar salario"));
            alert(ej12_salario(salario));
            break;
        case 13:
            const alumnos = [{
                name: "alumnos",
                nota: "10",
            }, {
                name: "alumnos1",
                nota: "17",
            }, {
                name: "alumnos2",
                nota: "18",
            }];
            alert(ej13_nota(alumnos));
            break;
        case 14:
            const focos = [{ color: "rojo" }, { color: "verde" }, { color: "blanco" }, { color: "blanco" }, { color: "rojo" }, { color: "verde" }, { color: "blanco" }, { color: "rojo" }, { color: "verde" }, { color: "blanco" }, { color: "verde" }, { color: "verde" }, { color: "blanco" }, { color: "blanco" }, { color: "blanco" }];
            alert(ej14_focos(focos));
            break;

        case 15:
            const validarEdad = parseInt(prompt("ingresar edad"));
            alert(ej15_verificarEdad(validarEdad));
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

function ej2_promedio(a, b, c, d) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return "Ingresar datos correctos";
    } else {
        return ((a + b + c + d) / 4);
    }
}

function ej3_rectangulo(b, a) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresar datos correctos";
    } else {
        return a * b;
    }
}

function ej4_triangulo(b, a) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresar datos correctos";
    } else {
        return ((a * b) / 2);
    }
}

function ej5_circulo(r) {
    if (isNaN(r)) {
        return "Ingresar dato correcto";
    } else {
        const pi = 3.14;
        return (pi * Math.pow(r, 2));
    }
}

function ej6_sueldo(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresar dato correcto";
    } else {
        if (a > 48) {
            return "paso el limite de horas trabajadas por semana";
        }
        return (a * b);
    }
}

function ej7_tela(a) {
    if (isNaN(a) || a < 0) {
        return "Ingresar dato correcto";
    } else {
        return (a / 0.0254);
    }
}

function ej8_cambio(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Ingresar dato correcto";
    } else {
        return (a / b);
    }
}

function ej9_anio(a) {
    if (isNaN(a) && a > 1990) {
        return "Ingresar dato correcto";
    } else {
        const anio = new Date();
        return (anio.getFullYear() - a)
    }
}

function ej10_menoredad(a) {

    let fnombre = "";
    let fedad = a[0].age;



    for (let i = 0; i < a.length; i++) {

        if (a[i].age < fedad) {
            fnombre = a[i].name;
            fedad = a[i].age;
        }
    }

    return (fnombre + " " + fedad);

}
function ej11_antiguedad(a) {

    switch (a) {
        case 1:
            return ("bonificación: " + 100)
            break;
        case 2:
            return ("bonificación: " + 200)
            break;
        case 3:
            return ("bonificación: " + 300)
            break;
        case 4:
            return ("bonificación: " + 400)
            break;
        case 5:
            return ("bonificación: " + 500)
            break;

        default:
            return ("bonificación: " + 1000)
            break;
    }

}

function ej12_salario(salario) {
    let calculo;
    let text = "";
    for (let i = 1; i <= 6; i++) {
        salario = salario + (salario * (1 / 10));
        text += i.toString() + " año " + salario.toString() + "\r\n";
    }
    return (text);
}

function ej13_nota(alumnos) {
    let aprobados = 0;
    let reprobados = 0;
    alumnos.map((alumnos, index) => {
        if (alumnos.nota > 10) {
            aprobados++;
        } else {
            reprobados++;
        }
    });
    return ("Aprobados:" + aprobados + "\r\n" + "Reprobados:" + reprobados);
}

function ej14_focos(focos) {
    let rojo = 0;
    let verde = 0;
    let blanco = 0;
    for (let i = 0; i < focos.length; i++) {
        if (focos[i].color === "rojo") {
            rojo++;
        } else if (focos[i].color === "verde") {
            verde++;
        } else {
            blanco++;
        }
    }

    return ("rojo:" + rojo + "\r\n" + "verde:" + verde + "\r\n" + "blanco:" + blanco + "\r\n")

}

function ej15_verificarEdad(validarEdad) {
    if (validarEdad >= 18) {
        return "puedes votar"
    } else {
        return "no puedes votar"
    }
}
