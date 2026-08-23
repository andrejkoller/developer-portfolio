export interface PortfolioImage {
  height?: "compact" | "regular" | "tall";
  radius?: "none" | "sm" | "md";
  position?: "left" | "center" | "right";
}

export interface PortfolioProject {
  key: string;
  name: string;
  description?: string;
  images: PortfolioImage[];
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
        alt: "Athanasa Cloud Platform",
        images: [
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "left",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "compact",
            radius: "md",
            position: "right",
          },
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "left",
          },
          {
            height: "compact",
            radius: "md",
            position: "center",
          },
        ],
      },

      {
        key: "kleisa",
        name: "Kleisa",
        description: "Identity & Security",
        alt: "Kleisa Identity & Security",
        images: [
          {
            height: "regular",
            radius: "md",
            position: "left",
          },
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "compact",
            radius: "md",
            position: "right",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "tall",
            radius: "md",
            position: "left",
          },
        ],
      },

      {
        key: "omelia-ui",
        name: "Omelia UI",
        description: "React Component Library",
        alt: "Omelia UI React Component Library",
        images: [
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "left",
          },
          {
            height: "compact",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "right",
          },
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
        ],
      },

      {
        key: "sophia-js",
        name: "Sophia.js",
        description: "TypeScript Toolkit",
        alt: "Sophia.js TypeScript Toolkit",
        images: [
          {
            height: "compact",
            radius: "md",
            position: "right",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "compact",
            radius: "md",
            position: "left",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
        ],
      },

      {
        key: "lofty-charts",
        name: "Lofty Charts",
        description: "Charting Library",
        alt: "Lofty Charts Charting Library",
        images: [
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "compact",
            radius: "md",
            position: "left",
          },
          {
            height: "regular",
            radius: "md",
            position: "right",
          },
        ],
      },

      {
        key: "elegant-icons",
        name: "Elegant Icons",
        description: "SVG Icon Library",
        alt: "Elegant Icons SVG Icon Library",
        images: [
          {
            height: "compact",
            radius: "md",
            position: "left",
          },
          {
            height: "regular",
            radius: "md",
            position: "center",
          },
          {
            height: "compact",
            radius: "md",
            position: "right",
          },
        ],
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
        alt: "Omorfia Font Typeface Design",
        images: [
          {
            height: "tall",
            radius: "md",
            position: "center",
          },
          {
            height: "regular",
            radius: "md",
            position: "left",
          },
          {
            height: "compact",
            radius: "md",
            position: "center",
          },
          {
            height: "tall",
            radius: "md",
            position: "right",
          },
        ],
      },
    ],
  },
];
