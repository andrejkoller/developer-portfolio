export interface PortfolioProject {
  key: string;
  name: string;
  description?: string;
  images?: number;
  alt?: string;
  githubUrl?: string;
  isExternal?: boolean;
}

export interface PortfolioSection {
  key: string;
  label: string;
  projects: PortfolioProject[];
}

export const portfolioConfig: PortfolioSection[] = [
  {
    key: "products",
    label: "Products",
    projects: [
      {
        key: "athanasa",
        name: "Athanasa",
        description: "Cloud Platform",
        images: 7,
        alt: "Athanasa Cloud Platform",
        githubUrl: "https://github.com/athanasasystems/athanasa",
        isExternal: true,
      },
      {
        key: "kleisa",
        name: "Kleisa",
        description: "Identity & Security",
        images: 6,
        alt: "Kleisa Identity & Security",
        githubUrl: "https://github.com/athanasasystems/kleisa",
        isExternal: true,
      },
      {
        key: "qalamis",
        name: "Qalamis",
        description: "Digital Library Platform",
        images: 5,
        alt: "Qalamis Digital Library Platform",
        githubUrl: "https://github.com/qalamis/qalamis",
        isExternal: true,
      },
      {
        key: "omelia-ui",
        name: "Omelia UI",
        description: "React Component Library",
        images: 5,
        alt: "Omelia UI React Component Library",
        githubUrl: "https://github.com/athanasasystems/omelia-ui",
        isExternal: true,
      },
      {
        key: "sophia-js",
        name: "Sophia.js",
        description: "TypeScript Toolkit",
        images: 4,
        alt: "Sophia.js TypeScript Toolkit",
        githubUrl: "https://github.com/athanasasystems/sophia-js",
        isExternal: true,
      },
      {
        key: "lofty-charts",
        name: "Lofty Charts",
        description: "Charting Library",
        images: 3,
        alt: "Lofty Charts Charting Library",
        githubUrl: "https://github.com/athanasasystems/lofty-charts",
        isExternal: true,
      },
      {
        key: "elegant-icons",
        name: "Elegant Icons",
        description: "SVG Icon Library",
        images: 3,
        alt: "Elegant Icons SVG Icon Library",
        githubUrl: "https://github.com/athanasasystems/elegant-icons",
        isExternal: true,
      },
    ],
  },
  {
    key: "branding",
    label: "Branding",
    projects: [
      {
        key: "omorfia-font",
        name: "Omorfia Font",
        description: "Typeface Design",
        images: 4,
        alt: "Omorfia Font Typeface Design",
        githubUrl: "https://github.com/athanasasystems/omorfia-font",
        isExternal: true,
      },
    ],
  },
];
