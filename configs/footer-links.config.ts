export interface FooterLink {
  key: string;
  label: string;
  url: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export const footerLinksConfig = [
  {
    key: "x",
    label: "𝕏",
    url: "https://x.com/andrejkoller",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
];
