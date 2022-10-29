
fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
        let dato = JSON.stringify(data.data);
        localStorage.setItem('usuario1', dato);
    });


fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => {
        var dato1 = JSON.stringify(data.data);
        localStorage.setItem('usuario2', dato1);
    });


