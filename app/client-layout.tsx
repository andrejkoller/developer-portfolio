"use client";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col">
        <Header />
        <main className="layout-container mb-16" aria-label="Main content">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
