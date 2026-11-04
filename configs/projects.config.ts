export interface ProjectImage {
  width: number;
  // later: src / video
}

export interface Project {
  key: string;
  title: string;
  description: string;
  url: string;
  alt?: string;
  images: ProjectImage[];
}

export interface ProjectImage {
  width: number;
  // later: src / video
}

export interface Project {
  key: string;
  title: string;
  description: string;
  url: string;
  alt?: string;
  images: ProjectImage[];
}

export const projectsConfig: Project[] = [
  {
    key: "athanasa",
    title: "Athanasa",
    description:
      "A cloud platform for shipping and running modern web products — deployment, edge delivery, and the infrastructure around them in one place.",
    url: "https://athanasa.com",
    alt: "Athanasa Cloud Platform",
    images: [
      { width: 1100 },
      { width: 820 },
      { width: 640 },
      { width: 960 },
      { width: 720 },
    ],
  },
  {
    key: "kleisa",
    title: "Kleisa",
    description:
      "Authentication and identity for applications — sign-in, access control, and user management designed to stay clear under real product complexity.",
    url: "https://kleisa.com",
    alt: "Kleisa Authentication",
    images: [{ width: 1000 }, { width: 700 }, { width: 880 }],
  },
  {
    key: "omeliaui",
    title: "Omelia UI",
    description:
      "An open-source component library you can own and extend — accessible primitives, clear patterns, and a system built for real product UIs.",
    url: "https://omeliaui.com",
    alt: "Omelia UI Component Library",
    images: [{ width: 1080 }, { width: 720 }, { width: 900 }, { width: 640 }],
  },
  {
    key: "sophiajs",
    title: "Sophia JS",
    description:
      "An open-source framework for full-stack web apps — routing, rendering, and structure aimed at fast development and long-term maintainability.",
    url: "https://sophiajs.com",
    alt: "Sophia JS Framework",
    images: [{ width: 1040 }, { width: 760 }, { width: 920 }, { width: 680 }],
  },
  {
    key: "loftycharts",
    title: "Lofty Charts",
    description:
      "An open-source charting library for dashboards and data-heavy interfaces — flexible series, clean defaults, and visuals that stay readable at scale.",
    url: "https://loftycharts.com",
    alt: "Lofty Charts Library",
    images: [{ width: 1120 }, { width: 780 }, { width: 900 }],
  },
  {
    key: "eleganticons",
    title: "Elegant Icons",
    description:
      "An open-source icon set with consistent geometry — built for product UI, docs, and marketing with a unified stroke and sizing system.",
    url: "https://eleganticons.com",
    alt: "Elegant Icons Library",
    images: [{ width: 800 }, { width: 640 }, { width: 760 }],
  },
  {
    key: "fermola",
    title: "Fermola",
    description:
      "A publishing house for sheet music and related editions — careful typography, clear scores, and a digital presence shaped around the catalogue.",
    url: "https://fermola.com",
    alt: "Fermola Music Publishing House",
    images: [{ width: 900 }, { width: 1100 }, { width: 700 }, { width: 860 }],
  },
  {
    key: "hisversion",
    title: "His Version",
    description:
      "A digital Christian community with tools to grow in faith and share it with others — teaching, connection, and everyday practice online.",
    url: "https://hisversion.com",
    alt: "His Version Christian Community",
    images: [{ width: 1000 }, { width: 800 }, { width: 900 }],
  },
];
