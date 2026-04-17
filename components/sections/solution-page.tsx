import Link from "next/link";
import { projects, type ProjectCategory } from "@/data/projects";
import { ServiceFAQ } from "@/components/sections/service-faq";
import { PageCTA } from "@/components/sections/page-cta";
import { siteConfig } from "@/lib/site";

type SolutionPageProps = {
  title: string;
  summary: string;
  bullets: string[];
  category: ProjectCategory;
  path: string;
  keywordHeading: string;
  faq: { question: string; answer: string }[];
};

export function SolutionPage({ title, summary, bullets, category, path, keywordHeading, faq }: SolutionPageProps) {
  const relatedProjects = projects.filter((project) => project.category === category).slice(0, 4);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    provider: { "@type": "Person", name: "Ajay Kumar" },
    areaServed: "Global",
    serviceType: category,
    description: summary,
    url: `${siteConfig.url}${path}`
  };

  return (
    <main className="container-shell py-14">
      <section className="bento-card p-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 max-w-3xl text-muted">{summary}</p>
        <h2 className="mt-7 text-2xl font-semibold">{keywordHeading}</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 font-semibold text-black">
            Discuss This Solution
          </Link>
          <Link href="/#projects" className="rounded-xl border border-border px-5 py-3 font-semibold">
            Explore All Solutions
          </Link>
        </div>
      </section>

      <section className="mt-8 bento-card p-8">
        <h2 className="text-2xl font-bold">Related Project Case Studies</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {relatedProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-xl border border-border p-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted">{project.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <ServiceFAQ items={faq} />
      </div>

      <div className="mt-8">
        <PageCTA
          title="Need a backend architecture partner for this solution?"
          description="Get a technical consultation with roadmap clarity, delivery priorities, and platform scalability guidance."
        />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </main>
  );
}
