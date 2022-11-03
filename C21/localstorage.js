const btnLogin = document.querySelector("#btn-login")
const container = document.querySelector("#container-localstorage")




btnLogin.onclick = function (e) {
    console.log("🚀 ~ file: localstorage.js ~ line 5 ~ e", e)
    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {

        localStorage.setItem(input.name, input.value);
        local();
    });

}

function cerrar() {
    localStorage.clear();
    container.innerHTML = "";
}

function local() {
    const emailLocal = localStorage.getItem("email");
    const passwordLocal = localStorage.getItem("password");

    container.innerHTML = `<h1>${emailLocal}</h1>
    <h4>${passwordLocal}</h4>
    <button id="Cerrar" onclick="cerrar()">Cerrar</button>`;
}




