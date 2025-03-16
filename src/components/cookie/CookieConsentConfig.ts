import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'bar inline',
      position: 'bottom right',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4</a>',
          onAccept: () => {
            console.log('Google Analytics 4 accepté');
            // Charger Google Analytics 4 ici
          },
          onReject: () => {
            console.log('Google Analytics 4 refusé');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'fr',
    autoDetect: 'browser',
    translations: {
      fr: {
        consentModal: {
          title: "Bienvenue sur notre site !", 
          description:
            "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Vous pouvez accepter tous les cookies ou gérer vos préférences.",
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Tout refuser',
          showPreferencesBtn: 'Gérer mes préférences',
          footer:
            '<a href="/politique-confidentialite">Politique de confidentialité</a> | <a href="/mentions-legales">Mentions légales</a>',
        },
        preferencesModal: {
          title: 'Centre de préférences des cookies',
          acceptAllBtn: 'Tout accepter',
          acceptNecessaryBtn: 'Tout refuser',
          savePreferencesBtn: 'Enregistrer mes choix',
          closeIconLabel: 'Fermer',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Utilisation des cookies',
              description:
                "Nous utilisons des cookies pour garantir le bon fonctionnement du site, améliorer votre navigation et analyser notre audience.",
            },
            {
              title:
                'Cookies strictement nécessaires <span class="pm__badge">Toujours activés</span>',
              description:
                "Ces cookies sont indispensables pour le bon fonctionnement du site et ne peuvent pas être désactivés.",
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies de fonctionnalité',
              description:
                "Ces cookies permettent d'améliorer votre expérience utilisateur en mémorisant vos préférences.",
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies analytiques',
              description:
                "Ces cookies nous permettent de mesurer et d’analyser le trafic sur notre site afin d’en améliorer le contenu et l’expérience utilisateur.",
              linkedCategory: 'analytics',
            },
            {
              title:'Cookies marketing',
              description:"Ces cookies sont utilisés pour vous proposer des publicités personnalisées en fonction de vos centres d’intérêt.",
              linkedCategory:'marketing'
            }
            ,
            {
              title: 'Plus d’informations',
              description:
                'Pour toute question concernant notre politique de cookies, veuillez <a class="cc__link" href="/contact">nous contacter</a>.',
            },
          ],
        },
      },
    },
  },
};
