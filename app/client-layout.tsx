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
          className="grow w-full max-w-175 min-h-screen mx-auto px-4"
          aria-label="Main content"
        >
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
