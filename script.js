// Importamos el fichero de JSON
import { destinations } from "./json.js";

// Generar las tarjetas dinámicamente
const locationGrid = document.getElementById('locationGrid');
for (let i = 0; i < destinations.length; i++) {
    const destination = destinations[i]; // Obtenemos el elemento actual

    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';

    const card = document.createElement('div');
    card.className = 'location-card cursor-pointer';

    card.onclick = () => openModal(destination.name, destination.description, destination.descri, destination.image, destination.lat, destination.lon);

    card.innerHTML = `
                      <img src="${destination.image[0]}" alt="${destination.name}">
                      <div class="p-3">
                          <h2 class="fs-5 fw-bold text-primary">${destination.name}</h2>
                          <p class="text-muted">${destination.description}</p>
                      </div>
                    `;

    col.appendChild(card);
    locationGrid.appendChild(col);
}


let map; // Variable global para la instancia del mapa
function openModal(nombre, dess, descri, foto, lat, log) {
    document.getElementById("mapModal").style.display = "block";
    document.querySelector(".close").addEventListener("click", closeModal);
    map = L.map('map').setView([lat, log], 13); // Coordenadas de ejemplo

    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // console.log(nombre);
    // console.log(descri);

    // Añadir marcador
    L.marker([lat, log]).addTo(map)
        .bindPopup(nombre)
        .openPopup();

    // Colocando los atributos
    const h2 = document.getElementById("h2");
    const descrip = document.getElementById("descri");
    const carouselContainer = document.getElementById("carouselContainer");

    h2.innerHTML = dess;
    descrip.innerHTML = descri;

    // Datos del carrusel (puedes reemplazar "foto" con un array de imágenes)
    // const images = [
    //     foto,
    //     "https://www.laregion.bo/wp-content/uploads/2015/10/COROICO.jpg",
    //     "https://i.ytimg.com/vi/-Xt3eBLN1Tg/maxresdefault.jpg"
    // ];

    // Generar el contenido del carrusel
    carouselContainer.innerHTML = `
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
              ${foto.map((img, index) => `
                  <div class="carousel-item ${index === 0 ? 'active' : ''}">
                      <img src="${img}" class="d-block w-100" alt="Imagen ${index + 1}" style="border-radius: 8px;">
                  </div>
              `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div>
  `;
}


// Función para cerrar el modal
function closeModal() {
    // Oculta el modal
    document.getElementById("mapModal").style.display = "none";

    // Elimina el mapa si existe, si no se hace marca un error
    if (map) {
        map.remove(); // Libera los recursos del mapa
        map = null; // Resetea la variable para evitar referencias antiguas
    }
}


// Cerrar el modal si el usuario hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == document.getElementById("mapModal")) {
        closeModal();
    }
}