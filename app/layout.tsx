import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { FloatingContactButton } from "@/components/sections/floating-contact-button";
import { MarketingScripts } from "@/components/layout/marketing-scripts";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Ajay Kumar | Senior Software Architect",
  description: siteConfig.description
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ajay Kumar",
  jobTitle: "Senior Software Architect",
  url: siteConfig.url,
  knowsAbout: ["Laravel", "Node.js", "SaaS", "AI Solutions", "Backend Architecture"],
  sameAs: [siteConfig.linkedin, siteConfig.github]
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ajay Kumar Architecture Services",
  description: "Enterprise backend architecture, SaaS platform engineering, and AI solution consulting.",
  areaServed: "Global",
  url: siteConfig.url
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Footer />
          <FloatingContactButton />
          <MarketingScripts />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      </body>
    </html>
  );
}
