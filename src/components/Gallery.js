import { createImageCard } from "./ImageCard.js";

export function createGallery(images) {
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });

  return gallery;
}
