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
    description: "Description coming soon",
    url: "https://athanasa.com",
    alt: "Athanasa Cloud Platform",
    images: [
      { width: 1100 }, // Hero / Dashboard
      { width: 820 }, // Main UI
      { width: 640 }, // Detail / Panel
      { width: 960 }, // Second flow
      { width: 720 }, // Mobile oder Close-up
    ],
  },
  {
    key: "kleisa",
    title: "Kleisa",
    description: "Description coming soon",
    url: "https://kleisa.com",
    alt: "Kleisa Security",
    images: [{ width: 1000 }, { width: 700 }, { width: 880 }],
  },
  {
    key: "omeliaui",
    title: "Omelia UI",
    description: "Description coming soon",
    url: "https://omeliaui.com",
    alt: "Omelia UI Component Library",
    images: [
      { width: 1080 }, // Library overview
      { width: 720 }, // Component grid
      { width: 900 }, // Docs / playground
      { width: 640 }, // Single component
    ],
  },
  {
    key: "sophiajs",
    title: "Sophia JS",
    description: "Description coming soon",
    url: "https://sophiajs.com",
    alt: "Sophia JS Framework",
    images: [{ width: 1040 }, { width: 760 }, { width: 920 }, { width: 680 }],
  },
  {
    key: "loftycharts",
    title: "Lofty Charts",
    description: "Description coming soon",
    url: "https://loftycharts.com",
    alt: "Lofty Charts Library",
    images: [{ width: 1120 }, { width: 780 }, { width: 900 }],
  },
  {
    key: "eleganticons",
    title: "Elegant Icons",
    description: "Description coming soon",
    url: "https://eleganticons.com",
    alt: "Elegant Icons Library",
    images: [{ width: 800 }, { width: 640 }, { width: 760 }],
  },
  {
    key: "fermola",
    title: "Fermola",
    description: "Description coming soon",
    url: "https://fermola.com",
    alt: "Fermola Publishing House",
    images: [
      { width: 900 }, // Cover / identity
      { width: 1100 }, // Spread
      { width: 700 }, // Detail
      { width: 860 }, // Digital / web
    ],
  },
  {
    key: "highbible",
    title: "High Bible",
    description: "Description coming soon",
    url: "https://highbible.com",
    alt: "High Bible Platform",
    images: [{ width: 1020 }, { width: 740 }, { width: 900 }, { width: 680 }],
  },
];
