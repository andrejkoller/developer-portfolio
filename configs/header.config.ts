export interface HeaderLink {
  key: string;
  title?: string;
  url: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export const headerConfig: HeaderLink[] = [
  {
    key: "github",
    title: "GitHub",
    url: "https://github.com/andrejkoller",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/andrejkoller",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
  {
    key: "x",
    title: "X",
    url: "https://x.com/andrejkoller",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
];
