//capturar elementos
const btn = document.querySelector("#btn_login");
const inputs = document.querySelectorAll("form input");

//capturar localstorage
const lStorage = localStorage.getItem("email");
console.log("🚀 ~ file: login.js ~ line 7 ~ lStorage", lStorage)

//funcion de boton
btn.addEventListener("click", function (e) {
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value != "") {
            localStorage.setItem(input.name, input.value);
        } else {

            return console.log("error");

        }
    });

});

//SWEETALERT
if (lStorage != null) {
    Swal.fire(
        'Bienvenido',
        `${lStorage}`,
        'success'
    )
}