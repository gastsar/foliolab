// Compétences
export const skills = [
  {
    category: "Développement Frontend",
    icon: "fa-solid fa-code",
    items: [
      {
        name: "HTML",
        level: 8,
        icon: "fa-brands fa-html5",
        expertise: "Advanced",
      },
      {
        name: "CSS",
        level: 8,
        icon: "fa-brands fa-css3-alt",
        expertise: "Advanced",
      },
      {
        name: "JavaScript",
        level: 7,
        icon: "fa-brands fa-js",
        expertise: "Intermediate",
      },
      {
        name: "TypeScript",
        level: 6,
        icon: "fa-solid fa-code",
        expertise: "Intermediate",
      },
      {
        name: "TailwindCSS",
        level: 7,
        icon: "fa-solid fa-palette",
        expertise: "Intermediate",
      },
      {
        name: "Sass",
        level: 6,
        icon: "fa-brands fa-sass",
        expertise: "Intermediate",
      },
      {
        name: "Bootstrap",
        level: 7,
        icon: "fa-brands fa-bootstrap",
        expertise: "Intermediate",
      },
      {
        name: "React",
        level: 7,
        icon: "fa-brands fa-react",
        expertise: "Intermediate",
      },
      {
        name: "React Native",
        level: 5,
        icon: "fa-solid fa-mobile-screen",
        expertise: "Beginner",
      },
      {
        name: "Next.js",
        level: 6,
        icon: "fa-solid fa-arrow-right",
        expertise: "Intermediate",
      },
      {
        name: "Astro",
        level: 4,
        icon: "fa-solid fa-star",
        expertise: "Beginner",
      },
    ],
  },
  {
    category: "Développement Backend",
    icon: "fa-solid fa-server",
    items: [
      {
        name: "API REST",
        level: 6,
        icon: "fa-solid fa-link",
        expertise: "Intermediate",
      },
      {
        name: "MySQL",
        level: 6,
        icon: "fa-solid fa-database",
        expertise: "Intermediate",
      },
      {
        name: "Firebase",
        level: 5,
        icon: "fa-solid fa-fire",
        expertise: "Beginner",
      },
      {
        name: "Prisma",
        level: 5,
        icon: "fa-solid fa-gem",
        expertise: "Beginner",
      },
    ],
  },
  {
    category: "DevOps & Outils",
    icon: "fa-solid fa-gears",
    items: [
      {
        name: "Git",
        level: 8,
        icon: "fa-brands fa-git-alt",
        expertise: "Advanced",
      },
      {
        name: "GitHub",
        level: 8,
        icon: "fa-brands fa-github",
        expertise: "Advanced",
      },
      {
        name: "GitLab",
        level: 6,
        icon: "fa-brands fa-gitlab",
        expertise: "Intermediate",
      },
      {
        name: "CI/CD",
        level: 5,
        icon: "fa-solid fa-infinity",
        expertise: "Beginner",
      },
      {
        name: "Docker",
        level: 4,
        icon: "fa-brands fa-docker",
        expertise: "Beginner",
      },
      {
        name: "Jest",
        level: 5,
        icon: "fa-solid fa-vial",
        expertise: "Beginner",
      },
    ],
  },
  {
    category: "Qualité & Performance",
    icon: "fa-solid fa-bolt",
    items: [
      {
        name: "Responsive Design",
        level: 8,
        icon: "fa-solid fa-expand",
        expertise: "Advanced",
      },
      {
        name: "Accessibilité",
        level: 6,
        icon: "fa-solid fa-universal-access",
        expertise: "Intermediate",
      },
      {
        name: "Performance Web",
        level: 5,
        icon: "fa-solid fa-gauge",
        expertise: "Beginner",
      },
    ],
  },
  {
    category: "Design & UI/UX",
    icon: "fa-solid fa-pen-nib",
    items: [
      {
        name: "Figma",
        level: 6,
        icon: "fa-brands fa-figma",
        expertise: "Intermediate",
      },
      {
        name: "Penpot",
        level: 5,
        icon: "fa-solid fa-pen-ruler",
        expertise: "Beginner",
      },
      {
        name: "UI/UX Design",
        level: 6,
        icon: "fa-solid fa-lightbulb",
        expertise: "Intermediate",
      },
      {
        name: "Design System",
        level: 6,
        icon: "fa-solid fa-palette",
        expertise: "Intermediate",
      },
    ],
  },

  {
    category: "Outils de Développement",
    icon: "fa-solid fa-toolbox",
    items: [
      {
        name: "VS Code",
        level: 8,
        icon: "fa-solid fa-laptop-code",
        expertise: "Advanced",
      },
      {
        name: "Markdown",
        level: 7,
        icon: "fa-solid fa-file-alt",
        expertise: "Intermediate",
      },
      {
        name: "Terminal",
        level: 6,
        icon: "fa-solid fa-terminal",
        expertise: "Intermediate",
      },
      {
        name: "Postman",
        level: 7,
        icon: "fa-solid fa-envelope-open-text",
        expertise: "Intermediate",
      },
      {
        name: "DevTools",
        level: 7,
        icon: "fa-solid fa-tools",
        expertise: "Intermediate",
      },
    ],
  },
  {
    category: "Compétences Transversales",
    icon: "fa-solid fa-rocket",
    items: [
      {
        name: "Communication",
        level: 7,
        icon: "fa-solid fa-comments",
      },
      {
        name: "Collaboration",
        level: 7,
        icon: "fa-solid fa-handshake",
      },
      {
        name: "Esprit d'équipe",
        level: 8,
        icon: "fa-solid fa-people-group",
      },
      {
        name: "Résolution de problèmes",
        level: 7,
        icon: "fa-solid fa-brain",
      },
      {
        name: "Adaptabilité",
        level: 8,
        icon: "fa-solid fa-sync",
      },
      {
        name: "Autonomie",
        level: 8,
        icon: "fa-solid fa-user-check",
      },
      {
        name: "Rigueur",
        level: 7,
        icon: "fa-solid fa-ruler",
      },
    ],
  },
];

// Expériences professionnelles
export const experiences = [
  {
    title: "Développeur Front-end ",
    company: "EasyTri (Entreprise)",
    period: "2020 - 2023",
    description:
      "Création d'interfaces utilisateur réactives et accessibles, optimisation des performances, collaboration avec les designers.",
    task: [
      "Développement de l'application web EasyTri en React",
      "Intégration de nouvelles fonctionnalités",
      "Optimisation des performances",
      "Tests unitaires et fonctionnels",
    ],
  },
  {
    title: "Développeur Web Junior (Stage)",
    company: "ADM Toulouse (Association)",
    period: "2021 - 2021",
    description:
      "Développement de fonctionnalités pour des applications web, correction de bugs, participation aux revues de code.",
    task: [
      "Développement de l'application web ADM Toulouse en React",
      "Intégration de nouvelles fonctionnalités",
      "Correction de bugs",
      "Revues de code",
    ],
  },
  {
    title: "Gestion ",
    company: "TechSupport",
    period: "2015 - 2018",
    description:
      "Assistance technique pour les utilisateurs, résolution de problèmes matériels et logiciels, maintenance des systèmes.",
    task: [
      "Assistance technique pour les utilisateurs",
      "Résolution de problèmes matériels et logiciels",
      "Maintenance des systèmes",
    ],
  },
];

// Formation
export const education = [
  {
    degree: "Master en Développement Web",
    institution: "Université de Technologie",
    period: "2016 - 2018",
  },
  {
    degree: "Licence en Informatique",
    institution: "Université des Sciences",
    period: "2013 - 2016",
  },
];
