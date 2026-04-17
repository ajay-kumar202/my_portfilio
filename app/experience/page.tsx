import { ExperienceSection } from "@/components/sections/experience-section";
import { buildMetadata } from "@/lib/seo";
import { PageCTA } from "@/components/sections/page-cta";

export const metadata = buildMetadata({
  title: "Experience | Ajay Kumar",
  description: "Leadership and architecture experience across enterprise, logistics, and SaaS systems.",
  keywords: ["Backend leadership", "Laravel experience", "Software architect experience"],
  path: "/experience"
});

export default function ExperiencePage() {
  return (
    <main className="py-14">
      <ExperienceSection />
      <div className="container-shell mt-8">
        <PageCTA
          title="Need technical leadership for a complex platform?"
          description="Engage Ajay for architecture planning, modernization strategy, and delivery execution support."
        />
      </div>
    </main>
  );
}
