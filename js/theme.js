
(() => {
    const html = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const themeToggle = document.getElementById("themeToggle");

    function hasSavedTheme() {
        return localStorage.getItem("theme") !== null;
    }

    function getTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }

        return prefersDark.matches ? "dark" : "light";
    }

    let theme = getTheme();

    function applyTheme() {
        html.setAttribute("data-bs-theme", theme);

        const button = document.getElementById("themeToggle");

        if (!button) return;

        const icon = button.querySelector("i");
        const isDark = theme === "dark";

        if (icon) {
            icon.className = isDark
                ? "bi bi-sun"
                : "bi bi-moon-stars";
        }

        button.setAttribute(
            "aria-label",
            isDark ? "light theme" : "dark theme"
        );

        button.setAttribute(
            "title",
            isDark ? "light theme" : "dark theme"
        );
    }

    document.addEventListener("click", (event) => {
        const button = event.target.closest("#themeToggle");

        if (!button) return;

        theme = theme === "light" ? "dark" : "light";

        localStorage.setItem("theme", theme);

        applyTheme();
    });

    prefersDark.addEventListener("change", () => {
        if (!hasSavedTheme()) {
            theme = getTheme();
            applyTheme();
        }
    });

    applyTheme();
})();
