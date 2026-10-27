"use client";

import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <main aria-label="Main content">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
