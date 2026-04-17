"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { SolutionsFilter } from "@/components/projects/solutions-filter";

export function ProjectsGrid() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="container-shell py-10">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Solutions Mega-Grid</h2>
          <p className="mt-2 text-sm text-muted">Filter by capability and industry outcome.</p>
        </div>
        <SolutionsFilter active={active} onChange={setActive} />
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div key={project.slug} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
