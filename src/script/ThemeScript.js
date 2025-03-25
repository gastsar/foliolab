// Fonction pour récupérer et appliquer le thème au chargement
(function () {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");

  document.documentElement.classList.toggle("dark", theme === "dark");
  updateIcons(theme);
})();

function updateIcons(theme) {
  // En mode sombre -> Afficher soleil (pour repasser en mode clair)
  document
    .getElementById("sunIcon")
    .classList.toggle("hidden", theme !== "dark");
  // En mode clair -> Afficher lune (pour passer en mode sombre)
  document
    .getElementById("moonIcon")
    .classList.toggle("hidden", theme === "dark");
}

document.getElementById("themeToggle").addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  const newTheme = isDark ? "dark" : "light";

  localStorage.setItem("theme", newTheme);
  updateIcons(newTheme);
});
