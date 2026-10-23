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
      { width: 1200 },
      { width: 800 },
      { width: 1000 },
      { width: 700 },
      { width: 900 },
    ],
  },
  {
    key: "kleisa",
    title: "Kleisa",
    description: "Description coming soon",
    url: "https://kleisa.com",
    alt: "Kleisa Security",
    images: [{ width: 1000 }, { width: 700 }, { width: 850 }],
  },
  {
    key: "omeliaui",
    title: "Omelia UI",
    description: "Description coming soon",
    url: "https://omeliaui.com",
    alt: "Omelia UI Component Library",
    images: [
      { width: 1100 },
      { width: 750 },
      { width: 900 },
      { width: 650 },
      { width: 800 },
    ],
  },
  {
    key: "sophiajs",
    title: "Sophia JS",
    description: "Description coming soon",
    url: "https://sophiajs.com",
    alt: "Sophia JS Framework",
    images: [{ width: 1000 }, { width: 700 }, { width: 850 }, { width: 600 }],
  },
  {
    key: "loftycharts",
    title: "Lofty Charts",
    description: "Description coming soon",
    url: "https://loftycharts.com",
    alt: "Lofty Charts Library",
    images: [{ width: 1000 }, { width: 700 }, { width: 850 }],
  },
  {
    key: "eleganticons",
    title: "Elegant Icons",
    description: "Description coming soon",
    url: "https://eleganticons.com",
    alt: "Elegant Icons Library",
    images: [{ width: 900 }, { width: 650 }, { width: 800 }],
  },
  {
    key: "fermola",
    title: "Fermola",
    description: "Description coming soon",
    url: "https://fermola.com",
    alt: "Fermola Publishing House",
    images: [{ width: 1000 }, { width: 700 }, { width: 850 }, { width: 600 }],
  },
  {
    key: "highbible",
    title: "High Bible",
    description: "Description coming soon",
    url: "https://highbible.com",
    alt: "High Bible Platform",
    images: [{ width: 1000 }, { width: 700 }, { width: 850 }],
  },
];
