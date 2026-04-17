import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { PageCTA } from "@/components/sections/page-cta";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };
type RouteProps = { params: Promise<Params> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.title} | Case Study`;
  const description = project.summary;
  return {
    title,
    description,
    keywords: project.keywords,
    alternates: { canonical: `${siteConfig.url}/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: [{ url: project.heroImage }]
    },
    twitter: { card: "summary_large_image", title, description, images: [project.heroImage] }
  };
}

export default async function ProjectDetailPage({ params }: RouteProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2);

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: project.title,
    about: project.summary,
    keywords: project.keywords.join(", "),
    creator: {
      "@type": "Person",
      name: "Ajay Kumar"
    }
  };

  return (
    <main className="container-shell py-14">
      <article className="space-y-8">
        <section className="bento-card overflow-hidden">
          <Image src={project.heroImage} alt={project.title} width={1200} height={600} className="h-72 w-full object-cover" />
          <div className="p-8">
            <p className="text-sm text-accent">{project.category}</p>
            <h1 className="mt-2 text-4xl font-bold">{project.title}</h1>
            <p className="mt-3 max-w-3xl text-muted">{project.summary}</p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card title="Challenge" content={project.problem} />
          <Card title="Solution" content={project.solution} />
          <Card title="Results" content={project.results} />
        </section>

        <section className="bento-card p-6">
          <h2 className="text-2xl font-semibold">Feature Highlights</h2>
          <p className="mt-2 text-muted">{project.solution}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bento-card p-6">
          <h2 className="text-2xl font-semibold">Related Projects</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="rounded-xl border border-border p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <PageCTA
          title="Need a similar backend architecture outcome?"
          description="Book a discovery session to map technical priorities, delivery risks, and scaling strategy."
        />
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWork) }} />
    </main>
  );
}

function Card({ title, content }: { title: string; content: string }) {
  return (
    <article className="bento-card p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted">{content}</p>
    </article>
  );
}
