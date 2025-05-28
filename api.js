const ACCESS_KEY = "cfzDr_24QkWcoep2hVT8TrBAVK_BRBOcOOHI8sYrezw"; 
export async function fetchImages(query) {
  const endpoint = `https://api.unsplash.com/search/photos?query=${query}&client_id=${ACCESS_KEY}&per_page=30`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al buscar imágenes:", error);
    return [];
  }
}
