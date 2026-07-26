export interface PortfolioProject {
  key: string;
  name: string;
  description?: string;
  images?: number;
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
      },
      {
        key: "kleisa",
        name: "Kleisa",
        description: "Identity & Security",
        images: 6,
      },
      {
        key: "qalamis",
        name: "Qalamis",
        description: "Digital Library Platform",
        images: 5,
      },
      {
        key: "omelia-ui",
        name: "Omelia UI",
        description: "React Component Library",
        images: 5,
      },
      {
        key: "sophia-js",
        name: "Sophia.js",
        description: "TypeScript Toolkit",
        images: 4,
      },
      {
        key: "lofty-charts",
        name: "Lofty Charts",
        description: "Charting Library",
        images: 3,
      },
      {
        key: "elegant-icons",
        name: "Elegant Icons",
        description: "SVG Icon Library",
        images: 3,
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
      },
      {
        key: "eternal-bravery",
        name: "Eternal Bravery",
        description: "Epic Science Fantasy Universe",
        images: 5,
      },
      {
        key: "fading-hell",
        name: "Fading Hell",
        description: "Hardcore Punk / Metalcore Band",
        images: 4,
      },
    ],
  },
];
