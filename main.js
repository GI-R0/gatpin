import { createHeader } from "./Header.js";
import { createGallery } from "./Gallery.js";
import { fetchImages } from "./api.js";
import "./main.css"; 

const app = document.querySelector("#app");

async function renderImages(query) {
  let images = await fetchImages(query);

  if (images.length === 0) {
    alert("No se encontraron imágenes. Mostrando resultados de 'gatos'.");
    images = await fetchImages("gatos");
  }

  const gallery = createGallery(images);

  
  const oldGallery = document.querySelector(".gallery");
  if (oldGallery) oldGallery.remove();

  app.appendChild(gallery);
}


function startApp() {
  app.innerHTML = ""; 
  const header = createHeader(renderImages, () => renderImages("paisajes"));
  app.appendChild(header);
  renderImages("paisajes"); 
}

startApp();
