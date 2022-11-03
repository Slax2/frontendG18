//capturar elementos
const btn = document.querySelector("#btn_login");
const inputs = document.querySelectorAll("form input");
const main = document.querySelector("main");


//capturar localstorage
const lStorage = localStorage.getItem("email");

//funcion de boton
btn.addEventListener("click", function (e) {
    e.preventDefault();
    inputs.forEach(input => {
        if (input.value != "") {
            localStorage.setItem(input.name, input.value);
            window.location.reload();
        } else {
            return console.log("error");
        }
    });

});

//SWEETALERT
if (lStorage != null) {
    main.style.cssText = "display:none;";
    Swal.fire({
        title: '¡Acceso autorizado!',
        text: `${lStorage}`,
        showDenyButton: true,
        confirmButtonText: 'Ok',
        denyButtonText: `Cerrar Sesión`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            main.innerHTML = `<h1>Bienvenido: ${lStorage}</h1>
            <a href="" onclick="${localStorage.clear()} ">Cerrar Sesión</a>`;
            main.style.cssText = "display:block;";
        } else if (result.isDenied) {
            main.style.cssText = "display:block;";
            localStorage.clear();
        }
    })
}