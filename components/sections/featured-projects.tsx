import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);
  return (
    <section className="container-shell py-10">
      <h2 className="text-3xl font-bold">Featured Case Studies</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
