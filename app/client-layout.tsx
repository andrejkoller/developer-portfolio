"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen text-sm">
        <Header />
        <main
          className="layout-container grow min-h-screen"
          aria-label="Main content"
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
