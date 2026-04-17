import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type MetaInput = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
};

export function buildMetadata({ title, description, keywords = [], path = "/" }: MetaInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"]
    }
  };
}
