const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = isDark ? "Use light theme" : "Use dark theme";
    themeToggle.setAttribute("aria-pressed", isDark);
});
