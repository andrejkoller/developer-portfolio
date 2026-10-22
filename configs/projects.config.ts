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
    images: [{ width: 900 }, { width: 640 }, { width: 780 }, { width: 800 }],
  },
  {
    key: "fermola",
    title: "Fermola",
    description: "Description coming soon",
    url: "https://fermola.com",
    alt: "Fermola Publishing House",
    images: [{ width: 760 }, { width: 600 }, { width: 840 }],
  },
];
