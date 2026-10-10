import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { ProjectsProvider } from "@/lib/ProjectsContext";
import AITwin from "@/components/shared/AITwin";
import { Suspense } from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evergreen Odeh - Product Designer, AI-Enabled Builder",
  description:
    "Founders come to me to shape things that don't exist yet. Product designer, business strategist, AI-enabled builder.",
  openGraph: {
    title: "Evergreen Odeh",
    description: "Product Designer - AI-Enabled Builder",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${dmSerif.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem={false}
  disableTransitionOnChange
>
  <ProjectsProvider>
    <Navbar />
    <main>{children}</main>
    <Footer />
    <AITwin />
  </ProjectsProvider>
</ThemeProvider>
          </body>
    </html>
  );
}