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
      key: "another-project",
      title: "Another Project",
      description: "Description of another project",
      alt: "Another Project Alt Text",
    },
    {
      key: "fermola",
      title: "Fermola",
      description: "Publishing House",
      alt: "Fermola Publishing House",
    },
    {
      key: "hisversion",
      title: "His Version",
      description: "Description of His Version project",
      alt: "His Version Alt Text",
    },
  ],
};
