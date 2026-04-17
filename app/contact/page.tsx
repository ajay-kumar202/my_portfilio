import { ContactForm } from "@/components/sections/contact-form";
import { buildMetadata } from "@/lib/seo";
import { PageCTA } from "@/components/sections/page-cta";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact Ajay Kumar | Consultation",
  description: "Book a consultation for enterprise architecture, Laravel modernization, or AI SaaS delivery.",
  keywords: ["Book backend architect", "Laravel consultation", "software architecture consulting"],
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main className="container-shell py-14">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-3 text-muted">Share your project details and receive a tailored architecture recommendation.</p>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="bento-card p-5">
          <h2 className="text-lg font-semibold">Fast Response</h2>
          <p className="mt-2 text-sm text-muted">Typical first response within 24 business hours.</p>
        </article>
        <article className="bento-card p-5">
          <h2 className="text-lg font-semibold">Global Delivery</h2>
          <p className="mt-2 text-sm text-muted">Remote-friendly collaboration with teams across regions.</p>
        </article>
        <article className="bento-card p-5">
          <h2 className="text-lg font-semibold">Trusted by Teams</h2>
          <p className="mt-2 text-sm text-muted">
            See proven architecture outcomes in{" "}
            <Link href="/#projects" className="text-accent hover:underline">
              project case studies
            </Link>
            .
          </p>
        </article>
      </section>
      <div className="mt-8">
        <ContactForm />
      </div>
      <div className="mt-8">
        <PageCTA
          title="Prefer a direct strategy call?"
          description="Share goals and constraints, and get a practical architecture roadmap for your product."
          primaryLabel="View Services"
          primaryHref="/#projects"
          secondaryLabel="Back to Home"
          secondaryHref="/"
        />
      </div>
    </main>
  );
}
