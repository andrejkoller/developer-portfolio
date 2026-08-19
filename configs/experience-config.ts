export interface Experience {
  key: string;
  company: string;
  role: string;
  from: string;
  to?: string;
}

export const experienceConfig = [
  {
    key: "athanasa",
    company: "Athanasa",
    role: "Founder",
    from: "2025",
  },
  {
    key: "freelance",
    company: "Freelance",
    role: "Software Developer",
    from: "2025",
  },
  {
    key: "icunet",
    company: "ICUnet",
    role: "Software Developer, Training",
    from: "2022",
    to: "2025",
  },
];
