const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

if (themeToggle) {
    const updateThemeButton = () => {
        const isDark = document.body.classList.contains("dark-theme");
        themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
        themeToggle.setAttribute("aria-pressed", String(isDark));
    };

    updateThemeButton();

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
        updateThemeButton();
    });
}
