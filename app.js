const url = "https://rickandmortyapi.com/api/character";
const container = document.querySelector(".container");

async function loadRickMortyApi(){
    const respuesta = await fetch(url);
    const data = await respuesta.json();

    const personajes = data.results;
    console.info("Desarollado por Arnold Gallegos");
    console.log(personajes);

    container.innerHTML=""
    personajes.forEach((personaje,index) => {
        container.innerHTML +=`<div class="card">
        <img src="${personaje.image}" alt="" />
        <h3>${personaje.name}</h3>
        <p>
          Genero: <span>${personaje.gender}</span><br>
          Status: <span>${personaje.status}</span><br>
          Species: <span>${personaje.species}</span>
        </p>
      </div>
    `;
        
    });
}

loadRickMortyApi();