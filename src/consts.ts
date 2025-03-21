// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Navigation
type Page = {
  title: string;
  href: string;
  children?: Page[];
};

export const SITE = {
  website: "https://kevinedev-portfolio.netlify.app/", // replace this with your deployed domain
  author: "Kevine_dev",
  desc: " Mon portfolio, développeur web fullstack. Découvrez mes projets, mes articles et mon parcours.",
  title: "Portfolio de Kevine_dev",
  keywords:
    "portfolio, kevine_dev, développeur web, fullstack, javascript, react, nodejs, express, mongodb, kevine, dev, kevine_dev, telolabz, yves narson kevine, yves narson, yves, narson, yves narson portfolio,dev_en_galere, dev en galère, dev_en_galère, dev_en_galere, dev en gal",
  ogImage: "laminutedecode-og.jpg",
  dynamicOgImage: true,
} as const;

export const PAGES: Page[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Projets",
    href: "/projects",
  },
  {
    title: "A propos",
    href: "/about",
  },
  {
    title: "Articles",
    href: "/blog",
  },
  {
    title: "Etiquettes",
    href: "/tags",
  },
];

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: ` ${SITE.title} on Github`,
  },
  {
    name: "X",
    href: "https://x.com/username",
    linkTitle: `${SITE.title} on X`,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/username/",
    linkTitle: `${SITE.title} on LinkedIn`,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
  },
] as const;
