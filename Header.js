export function createHeader(onSearch, onReset) {
  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
    <h1>Pinterest Clone</h1>
    <div class="logo" id="logo" style="cursor: pointer;">
      <img src="src/assets/logopin.png" alt="Logo de Pinterest" style="height: 40px; vertical-align: middle;">
    </div>
    <div class="search">
      <input type="text" id="searchInput" placeholder="Buscar imágenes..." />
      <button id="searchBtn">Buscar</button>
    </div>
  `;

  
  header.querySelector("#searchBtn").addEventListener("click", () => {
    const query = header.querySelector("#searchInput").value.trim();
    if (query) {
      onSearch(query);
      header.querySelector("#searchInput").value = "";
    }
  });

  header.querySelector("#logo").addEventListener("click", () => {
    onReset();
  });

  return header;
}
