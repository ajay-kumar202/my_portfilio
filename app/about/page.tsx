import { buildMetadata } from "@/lib/seo";
import { PageCTA } from "@/components/sections/page-cta";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About Ajay Kumar | Senior Software Architect",
  description:
    "About Ajay Kumar, a senior software architect delivering Laravel, backend, and SaaS systems for global businesses.",
  keywords: ["About Ajay Kumar", "Senior Backend Architect", "Laravel Architect"],
  path: "/about"
});

export default function AboutPage() {
  return (
    <main className="container-shell py-14">
      <section className="bento-card p-8">
        <h1 className="text-4xl font-bold">About Ajay Kumar</h1>
        <p className="mt-4 max-w-3xl text-muted">
          Ajay Kumar is a senior software architect focused on building resilient backend systems, enterprise
          platforms, and AI-enabled SaaS products. He combines technical depth with business-first execution.
        </p>
        <p className="mt-4 max-w-3xl text-muted">
          Explore specialized services in{" "}
          <Link href="/solutions/enterprise-management" className="text-accent hover:underline">
            enterprise management systems
          </Link>{" "}
          and{" "}
          <Link href="/solutions/ai-saas-fintech" className="text-accent hover:underline">
            AI SaaS architecture
          </Link>{" "}
          to see how technical leadership translates into measurable product outcomes.
        </p>
      </section>
      <div className="mt-8">
        <PageCTA
          title="Looking for a senior backend architect?"
          description="Let’s discuss your roadmap and identify the fastest path to a scalable architecture."
        />
      </div>
    </main>
  );
}
