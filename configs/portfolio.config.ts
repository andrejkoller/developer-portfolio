export interface PortfolioSection {
  key: string;
  title: string;
  projects: Project[];
}

export interface Project {
  key: string;
  title: string;
  description: string;
  alt?: string;
}

export const portfolioConfig: PortfolioSection = {
  key: "projects",
  title: "Selected Projects",
  projects: [
    {
      key: "athanasa",
      title: "Athanasa",
      description: "Cloud Platform",
      alt: "Athanasa Cloud Platform",
    },
    {
      key: "fermola",
      title: "Fermola",
      description: "Publishing House",
      alt: "Fermola Publishing House",
    },
    {
      key: "another-project",
      title: "Another Project",
      description: "Description of another project",
      alt: "Another Project Alt Text",
    },
    {
      key: "yet-another-project",
      title: "Yet Another Project",
      description: "Description of yet another project",
      alt: "Yet Another Project Alt Text",
    },
  ],
};
