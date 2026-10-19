async function loadLayout(elementId, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(elementId).innerHTML = html;
}

loadLayout("navbar", "layouts/navbar.html");
loadLayout("footer", "layouts/footer.html");