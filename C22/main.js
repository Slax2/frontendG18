const btn = document.querySelector("#btn-prueba");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
})


const btnError = document.querySelector("#btn-error");

btnError.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire(
        'ERROR',
        '!',
        'error'
    )
})

const btnCondicion = document.querySelector("#btn-condicion");

btnCondicion.onclick = function () {
    Swal.fire({
        title: 'Elegir',
        showDenyButton: true,
        confirmButtonText: 'Guardar',
        text: 'sdsad',
        denyButtonText: `Negar`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Guardar!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
}

const btnFoto = document.querySelector("#btn-foto");

btnFoto.addEventListener("click", function (e) {

    Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
})

///btn custom

const btnCustom = document.querySelector("#btn-custom");

btnCustom.addEventListener("click", () => {
    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://unsplash.it/400/200)',
        backdrop: `
    rgba(0,0,123,0.4)
    url("https://unsplash.it/400/200")
    left top
    no-repeat`
    })
})

//SELECT  ONCHANGE

const Select = document.querySelector("#select-option");

Select.onchange = function (e) {
    console.log("🚀 ~ file: main.js ~ line 81 ~ e", e)

    const { options, value } = e.target;
    console.log("🚀 ~ file: main.js ~ line 84 ~ nombre", options)

}