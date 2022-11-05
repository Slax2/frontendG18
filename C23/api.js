const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUser = document.querySelector("#github-user");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubTwitter = document.querySelector("#github-twitter");
const githuBLocation = document.querySelector("#github-location");

//INPUT Y BUTTON
const input = document.querySelector("#github-search");
const button = document.querySelector("#github-action-search");
//CONTENEDOR

const container = document.querySelector("#container-github");

//funcion
const cargarContenedor = (datos) => {
    return `<div class="card p-5">
<div class="card-body">
    <div class="row">
        <div class="col-md-2">
            <img src="${datos.avatar_url}" id="img-profile" width="100"
                height="100" class="rounded-circle img-fluid">
        </div>
        <div class="col-md-10">
            <div class="row">
                <div class="col-md-6">
                    <h4 id="github-name">${datos.name}</h4>
                    <p id="github-user">${datos.login}</p>
                    <p id="github-bio">${datos.bio}</p>
                </div>
                <div class="col-md-6">
                    <p id="github-joined">${datos.created_at}</p>
                </div>

                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Repos</p>
                                    <h4 id="github-repos">8</h4>
                                </div>
                                <div class="col-md-4">
                                    <p>Followers</p>
                                    <h4 id="github-followers">3950</h4>
                                </div>
                                <div class="col-md-4">
                                    <p>Following</p>
                                    <h4 id="github-following">9</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 mt-3">
                    <div class="row">
                        <div class="col-md-6">
                            <p>
                                <i class="fa-brands fa-twitter"></i>
                                <span id="github-twitter">not available</span>
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p>
                                <i class="fa-solid fa-location-dot"></i>
                                <span id="github-location">Lima-Peru</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</div>`
};

const obtenerDatosGitHub = async (username = "guillermosifu") => {

    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json();

    if (data.message) {
        console.error("Mensaje Status:", data.message)
    }
    else {
        container.innerHTML = cargarContenedor(data);
        console.log("🚀 ~ file: api.js ~ line 96 ~ obtenerDatosGitHub ~ data", data)
    }

    imgProfile.src = data.avatar_url;

    // console.log(data);

}

button.onclick = () => {
    const username = input.value;
    if (username === "") {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'error'
        )
    } else {
        obtenerDatosGitHub(username);
    }
}




