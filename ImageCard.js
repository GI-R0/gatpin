export function createImageCard(imageData) {
  const card = document.createElement("div");
  card.className = "image-card";

  card.innerHTML = `
    <img src="${imageData.urls.small}" alt="${imageData.alt_description}" />
    <p>
      📷 <a href="${imageData.user.links.html}" target="_blank">
        ${imageData.user.name}
      </a>
    </p>
  `;

  return card;
}
