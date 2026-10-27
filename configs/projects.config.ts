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
      "A cloud platform focused on clarity and control — web and security tooling shaped into a precise, product-ready experience.",
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
      "Security-oriented product design — interfaces and flows that make complex protection feel calm, legible, and trustworthy.",
    url: "https://kleisa.com",
    alt: "Kleisa Security",
    images: [{ width: 1000 }, { width: 700 }, { width: 880 }],
  },
  {
    key: "omeliaui",
    title: "Omelia UI",
    description:
      "A component library built for consistency — reusable primitives, clear patterns, and a system designers and developers can share.",
    url: "https://omeliaui.com",
    alt: "Omelia UI Component Library",
    images: [{ width: 1080 }, { width: 720 }, { width: 900 }, { width: 640 }],
  },
  {
    key: "sophiajs",
    title: "Sophia JS",
    description:
      "A JavaScript framework aimed at structure and speed — practical APIs, thoughtful defaults, and a foundation for long-lived apps.",
    url: "https://sophiajs.com",
    alt: "Sophia JS Framework",
    images: [{ width: 1040 }, { width: 760 }, { width: 920 }, { width: 680 }],
  },
  {
    key: "loftycharts",
    title: "Lofty Charts",
    description:
      "A charting library for readable data — clean defaults, flexible composition, and visuals that stay sharp in real product UIs.",
    url: "https://loftycharts.com",
    alt: "Lofty Charts Library",
    images: [{ width: 1120 }, { width: 780 }, { width: 900 }],
  },
  {
    key: "eleganticons",
    title: "Elegant Icons",
    description:
      "An icon set with disciplined geometry — consistent strokes, balanced forms, and a system that scales across product surfaces.",
    url: "https://eleganticons.com",
    alt: "Elegant Icons Library",
    images: [{ width: 800 }, { width: 640 }, { width: 760 }],
  },
  {
    key: "fermola",
    title: "Fermola",
    description:
      "Identity and digital presence for a publishing house — editorial typography, quiet layouts, and a durable visual system.",
    url: "https://fermola.com",
    alt: "Fermola Publishing House",
    images: [{ width: 900 }, { width: 1100 }, { width: 700 }, { width: 860 }],
  },
  {
    key: "highbible",
    title: "High Bible",
    description:
      "A platform for scripture and study — clear reading, thoughtful structure, and tools that support faith-centered daily use.",
    url: "https://highbible.com",
    alt: "High Bible Platform",
    images: [{ width: 1020 }, { width: 740 }, { width: 900 }, { width: 680 }],
  },
];
