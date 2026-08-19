export interface PortfolioProject {
  key: string;
  name: string;
  description?: string;
  images?: number;
  alt?: string;
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
      },
      {
        key: "kleisa",
        name: "Kleisa",
        description: "Identity & Security",
        images: 6,
        alt: "Kleisa Identity & Security",
      },
      {
        key: "omelia-ui",
        name: "Omelia UI",
        description: "React Component Library",
        images: 5,
        alt: "Omelia UI React Component Library",
      },
      {
        key: "sophia-js",
        name: "Sophia.js",
        description: "TypeScript Toolkit",
        images: 4,
        alt: "Sophia.js TypeScript Toolkit",
      },
      {
        key: "lofty-charts",
        name: "Lofty Charts",
        description: "Charting Library",
        images: 3,
        alt: "Lofty Charts Charting Library",
      },
      {
        key: "elegant-icons",
        name: "Elegant Icons",
        description: "SVG Icon Library",
        images: 3,
        alt: "Elegant Icons SVG Icon Library",
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
      },
    ],
  },
];
