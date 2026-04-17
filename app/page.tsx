import { ContactCTA } from "@/components/sections/contact-cta";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FAQ } from "@/components/sections/faq";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { IndustryGrid } from "@/components/sections/industry-grid";
import { StatsBar } from "@/components/sections/stats-bar";
import { Testimonials } from "@/components/sections/testimonials";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ajay Kumar | Architecting Scalable Systems for Global Brands",
  description:
    "Senior software architect specializing in Laravel, backend platforms, SaaS systems, AI-powered products, and enterprise solution delivery.",
  keywords: ["Senior Laravel Developer", "Backend Architect", "SaaS Architect", "AI solutions expert"],
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <section className="container-shell py-10">
        <h2 className="text-3xl font-bold">Service Landing Pages</h2>
        <p className="mt-2 text-sm text-muted">
          Explore specialized backend services for enterprise software, logistics, ecommerce, social platforms, and AI SaaS.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/solutions/enterprise-management" className="bento-card p-5">
            <h3 className="font-semibold">Enterprise Management Systems</h3>
            <p className="mt-1 text-sm text-muted">School, employee, hospital, and operations-focused backend platforms.</p>
          </Link>
          <Link href="/solutions/logistics-mobility" className="bento-card p-5">
            <h3 className="font-semibold">Logistics & Mobility Platforms</h3>
            <p className="mt-1 text-sm text-muted">Dispatch, route optimization, and real-time mobility product architecture.</p>
          </Link>
          <Link href="/solutions/ecommerce-delivery" className="bento-card p-5">
            <h3 className="font-semibold">Ecommerce & Delivery Systems</h3>
            <p className="mt-1 text-sm text-muted">Checkout, fulfillment, coupon, and conversion-driven commerce services.</p>
          </Link>
          <Link href="/solutions/social-media-platforms" className="bento-card p-5">
            <h3 className="font-semibold">Social & Media Platforms</h3>
            <p className="mt-1 text-sm text-muted">Scalable feeds, streaming workflows, and community engagement architecture.</p>
          </Link>
          <Link href="/solutions/real-estate-proptech" className="bento-card p-5">
            <h3 className="font-semibold">Real Estate & PropTech</h3>
            <p className="mt-1 text-sm text-muted">Listing intelligence, lead workflows, and event backend systems.</p>
          </Link>
          <Link href="/solutions/ai-saas-fintech" className="bento-card p-5">
            <h3 className="font-semibold">AI SaaS & Fintech Solutions</h3>
            <p className="mt-1 text-sm text-muted">Automation, analytics, and compliance-ready control plane development.</p>
          </Link>
        </div>
      </section>
      <ProjectsGrid />
      <FeaturedProjects />
      <IndustryGrid />
      <ExperienceSection />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
