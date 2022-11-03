const crear = document.querySelector("#crear");
const obtener = document.querySelector("#obtener");
const eliminar = document.querySelector("#eliminar");


crear.addEventListener("click", function (e) {

    sessionStorage.setItem("primera", "crear");

})

obtener.addEventListener("click", function (e) {


    console.log("🚀 ~ file: sessionStorage.js ~ line 15 ~ sessionStorage.getItem", sessionStorage.getItem("primera"))

})
eliminar.addEventListener("click", function (e) {

    sessionStorage.clear();

})