import type { Metadata } from "next";
import "./styles/globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "Software Engineer - Andrej Koller",
  description:
    "Andrej Koller is a software engineer from Ekibastuz, Kazakhstan. Based in Passau, Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
