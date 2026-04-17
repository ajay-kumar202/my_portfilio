"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { solutionRouteMap } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      className="bento-card p-6"
    >
      <Link
        href={solutionRouteMap[project.category]}
        className="inline-flex rounded-full border border-border px-3 py-1 text-xs text-accent"
      >
        {project.category}
      </Link>
      <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full bg-bg px-2 py-1 text-xs text-muted">
            {tech}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-6 inline-block text-sm font-semibold text-accent">
        View Case Study
      </Link>
    </motion.article>
  );
}
