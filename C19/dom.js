
const input = document.getElementsByTagName('input');


for (let i = 0; i < input.length; i++) {
    console.log("value", input[i].value);

}


const inputs = document.getElementsByTagName('input');


//CONVERTIR HTML COLECTION  A ARRAY

const newInputs = Array.from(inputs);


newInputs.forEach((element, index) => {
    if (index % 2) {
        element.style.backgroundColor = "#fcf";
        element.style.fontSize = "15px";
        element.style.border = "1px solid red";

    } else {
        element.style.backgroundColor = "#ddd";
        element.style.fontSize = "20px";
    }



});

//seleccionar un solo id

const password = document.getElementById("input_password");
// console.log(password)



const lista = document.getElementsByTagName('input');

const containerList = document.getElementById('ul_list');

for (let i = 0; i < lista.length; i++) {
    containerList.innerHTML += "<li>" + lista[i].value + "</li>";
}

//segunda prueba insertar 

const listaContainer = document.getElementById("container__list2");

const ul = document.createElement("ul");
listaContainer.appendChild(ul);

for (let i = 0; i < lista.length; i++) {

    ul.innerHTML += ("<li>" + lista[i].value + "</li>");

}





