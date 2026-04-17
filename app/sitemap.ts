import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/experience",
    "/contact",
    "/resume",
    "/solutions/enterprise-management",
    "/solutions/logistics-mobility",
    "/solutions/ecommerce-delivery",
    "/solutions/social-media-platforms",
    "/solutions/real-estate-proptech",
    "/solutions/ai-saas-fintech"
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes];
}
