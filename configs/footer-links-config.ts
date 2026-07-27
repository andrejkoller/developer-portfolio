export interface FooterLink {
  key: string;
  name: string;
  url: string;
  isExternal?: boolean;
}

export const footerLinksConfig = [
  {
    key: "x",
    name: "X",
    url: "https://x.com/andrejkoller",
    isExternal: true,
  },
  {
    key: "github",
    name: "GitHub",
    url: "https://github.com/andrejkoller",
    isExternal: true,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/andrejkoller",
    isExternal: true,
  },
];
