export interface ProjectLink {
  key: string;
  name: string;
  url: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export const projectLinksConfig = [
  {
    key: "athanasa",
    name: "Athanasa",
    url: "https://linktr.ee/athanasa",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
  {
    key: "akirune",
    name: "Akirune",
    url: "https://linktr.ee/akirune",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
  {
    key: "aurelet",
    name: "Aurelet",
    url: "https://linktr.ee/aurelet",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
];
