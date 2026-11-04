const BASE_PATH = new URL("../", document.currentScript.src);

async function loadLayout(elementId, file) {

    const response = await fetch(new URL(file, BASE_PATH));

    if (!response.ok) {
        throw new Error(`Error al cargar ${file}: ${response.status}`);
    }

    const html = await response.text();

    document.getElementById(elementId).innerHTML = html;
}

loadLayout("navbar", "layouts/navbar.html");
loadLayout("footer", "layouts/footer.html");