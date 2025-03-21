// Créez un fichier public/js/theme.js
(function () {
  // Fonction d'initialisation
  function init() {
    setupTheme();
    setupMobileMenu();
  }

  function setupTheme() {
    // Initialiser le thème
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Configure les écouteurs d'événements pour les boutons de thème
    const themeToggle = document.getElementById("theme-toggle");
    const themeToggleMobile = document.getElementById("theme-toggle-mobile");

    function toggleTheme() {
      const isDarkMode = document.documentElement.classList.contains("dark");

      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }

    if (themeToggle) {
      // Supprimer les écouteurs précédents pour éviter les doublons
      themeToggle.removeEventListener("click", toggleTheme);
      themeToggle.addEventListener("click", toggleTheme);
    }

    if (themeToggleMobile) {
      // Supprimer les écouteurs précédents pour éviter les doublons
      themeToggleMobile.removeEventListener("click", toggleTheme);
      themeToggleMobile.addEventListener("click", toggleTheme);
    }
  }

  function setupMobileMenu() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
      // Supprimer les écouteurs précédents
      const oldClickHandler = mobileMenuButton.onclick;
      if (oldClickHandler) {
        mobileMenuButton.removeEventListener("click", oldClickHandler);
      }

      mobileMenuButton.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");

        if (!mobileMenu.classList.contains("hidden")) {
          setTimeout(() => {
            mobileMenu.classList.add("opacity-100");
          }, 10);
        } else {
          mobileMenu.classList.remove("opacity-100");
        }
      });

      const mobileLinks = mobileMenu.querySelectorAll("a");
      mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    }
  }

  // Exécuter au chargement initial et à chaque changement d'URL
  document.addEventListener("DOMContentLoaded", init);

  // Réinitialiser quand le DOM change (au cas où)
  const observer = new MutationObserver(function (mutations) {
    init();
  });

  // Observer les changements dans le body (simplifié)
  observer.observe(document.body, { childList: true, subtree: true });
})();
