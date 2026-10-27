export interface FooterLink {
  key: string;
  title?: string;
  url: string;
}

export const footerConfig: FooterLink[] = [
  {
    key: "github",
    title: "GitHub",
    url: "https://github.com/andrejkoller",
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/andrejkoller",
  },
  {
    key: "x",
    title: "X",
    url: "https://x.com/andrejkoller",
  },
];
