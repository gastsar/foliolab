document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  function updateIcons(theme) {
    document.querySelectorAll(".sunIcon").forEach((el) => {
      el.classList.toggle("hidden", theme !== "dark");
    });

    document.querySelectorAll(".moonIcon").forEach((el) => {
      el.classList.toggle("hidden", theme === "dark");
    });
  }

  // Appliquer le bon thème au chargement de la page
  (function () {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", theme === "dark");
    updateIcons(theme);
  })();

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    updateIcons(newTheme);
  });
});
