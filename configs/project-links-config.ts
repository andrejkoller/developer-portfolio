export interface ProjectLink {
  key: string;
  name: string;
  url: string;
  isExternal?: boolean;
}

export const projectLinksConfig = [
  {
    key: "athanasa",
    name: "Athanasa",
    url: "https://linktr.ee/athanasa",
    isExternal: true,
  },
];
