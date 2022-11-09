// new Promise()
// esto determina que es una promesa
// resolve : este retorna la respuesta cuya esta ok 
// reject algo cuando creamos y no tiene respuesta


const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("aca demora en llegar a consola");
    }, 3000)

})


//ejecutamos la promesa

async function getDataFromPromesa() {
    const respuesta = await promesa;
    console.log(respuesta)
}

getDataFromPromesa();

//EXISTE OTRA FORMA DE LEER PROMESAS, ESTA EXISTE DEL ASYNC AWAIT
//.then()->entonces lueg de callback
//callback es una funcion que ejecuta algo en base a un resuktado

promesa.then((respuesta) => {
    console.log("then", respuesta)
})


//volvemos a crear una promesa con errores

const promesasConError = (validacion) => {
    return new Promise((resolve, reject) => {
        if (validacion) {
            resolve("la validacion esta ok");
        } else {
            reject(new Error("error en la validacion"))
        }
    })
}

//veamos como poder validar un error usando .then()

promesasConError()
    .then((respuesta) => {
        console.log(respuesta)
        //PARA PODER DETECTAR UN ERROR USAMOS .CATCH()

    })
    .catch((error) => {
        console.log(error.message)
    })

//vamos a validar un error usando async await

const validacionAsync = async () => {
    try {
        //aca va intentar obtener el resultado de la peticion

        const respuesta = await promesasConError();
        console.log("validacionAsync", respuesta)
    } catch (error) {
        // si detecta un error automatiamente entra al catch
        console.log("validacionAsync", error.message)
    }
}

validacionAsync();


//ejemplo real 

const getUserGithub = async () => {
    try {
        const response = await fetch("https://api.github.com/users/cvxcvcvcv");
        const data = await response.json();
        return data;
    } catch (error) {

        console.log(error.message)
    }
};
getUserGithub()

//veamos un poco de los que el statuts code ,
//normalmen estos codigo son respuesta de una peticion fallida

//200 ,500,401,403,404,201,512
//si una peticvion n0o devuelve un status que sea 200 201
//que la erespuesta es ok
//200 = ok
//201 = ok y ademas significa que algo ha sido creado

// si la url response  un 500 404 512
// hay un error
//404 = es el eroror que muestra cuandono encuentra la url , es devir no existe
//500 = es ele error que retorna cunado hay un preblema en serviudor
//512 = es un eror de espacio en el servidor

//get  = obetner datos
//post = enviar /crear datos
//put = actualizar datos
//delete = borrado