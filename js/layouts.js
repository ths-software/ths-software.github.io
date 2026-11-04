
const BASE_PATH = "/PortfolioWeb/";

async function loadLayout(elementId, file) {
    const response = await fetch(`${BASE_PATH}${file}`);

    if (!response.ok) {
        throw new Error(`Error al cargar ${file}: ${response.status}`);
    }

    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}

loadLayout("navbar", "layouts/navbar.html");
loadLayout("footer", "layouts/footer.html");
