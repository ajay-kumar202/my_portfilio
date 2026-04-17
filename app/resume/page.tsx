import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageCTA } from "@/components/sections/page-cta";

export const metadata = buildMetadata({
  title: "Resume | Ajay Kumar",
  description: "Professional resume and leadership background of Ajay Kumar, Senior Software Architect.",
  keywords: ["Ajay Kumar resume", "Senior software architect resume", "backend architect CV"],
  path: "/resume"
});

export default function ResumePage() {
  return (
    <main className="container-shell py-14">
      <section className="bento-card p-8">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="mt-4 text-muted">Replace this placeholder with parsed resume data and timeline blocks.</p>
        <Link href="/resume.pdf" className="mt-6 inline-block rounded-xl bg-accent px-5 py-3 font-semibold text-black">
          Download Resume PDF
        </Link>
      </section>
      <div className="mt-8">
        <PageCTA
          title="Want this level of backend ownership on your project?"
          description="Book a consultation to evaluate architecture, delivery risk, and team scaling needs."
        />
      </div>
    </main>
  );
}
