(function (C, A, L) {
  let p = function (a, ar) {
    a.q.push(ar);
  };
  let d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", "entretien-pour-alternance", { origin: "https://cal.com" });

// Détection du mode clair ou sombre
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Application du thème (clair ou sombre)
const theme = isDarkMode ? "dark" : "light";

Cal.ns["entretien-pour-alternance"]("ui", {
  cssVarsPerTheme: {
    light: { "cal-brand": "#45bba5" },
    dark: { "cal-brand": "#fafafa" },
  },
  hideEventTypeDetails: false,
  layout: "month_view",
  theme: theme, // Définit le thème en fonction de la préférence
});
