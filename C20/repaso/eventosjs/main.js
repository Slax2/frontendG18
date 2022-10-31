//aca haremos la dinamica 
let button = document.querySelector(".switch");
let circle = document.querySelector(".circle");
let mode = "light";
let title = document.querySelector(".h1");
let container = document.querySelector(".container");
let li = document.querySelector(".redes__ul");
console.log("🚀 ~ file: main.js ~ line 8 ~ li", li)


function lightMode() {
    button.className = "switch";
    container.className = "container";
    circle.className = "circle";
    title.textContent = "light mode";
}

function darkMode() {
    button.className = "darkButton";
    container.className = "darkContainer";
    circle.className = "darkCircle";
    title.textContent = "Dark Mode";
}

circle.addEventListener("click", () => {
    if (mode == "light") {
        darkMode();
        mode = "dark";
    } else {
        lightMode();
        mode = "light";
    }

})

li.addEventListener("click", (e) => {
    console.log("🚀 ~ file: main.js ~ line 37 ~ li.addEventListener ~ this", e)
});

