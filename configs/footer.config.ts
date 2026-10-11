export interface FooterLink {
  key: string;
  title?: string;
  url: string;
  hasTargetBlank?: boolean;
  hasRelNoopener?: boolean;
}

export const footerConfig: FooterLink[] = [
  {
    key: "x",
    title: "𝕏",
    url: "https://x.com/andrejkoller",
    hasTargetBlank: true,
    hasRelNoopener: true,
  },
];
