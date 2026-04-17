"use client";

import { motion } from "framer-motion";
import type { ProjectCategory } from "@/data/projects";

export const filters: Array<"All" | ProjectCategory> = [
  "All",
  "Enterprise",
  "Logistics",
  "Commerce",
  "Social",
  "Real Estate",
  "AI & Fintech"
];

type SolutionsFilterProps = {
  active: "All" | ProjectCategory;
  onChange: (next: "All" | ProjectCategory) => void;
};

export function SolutionsFilter({ active, onChange }: SolutionsFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <motion.button
          whileTap={{ scale: 0.97 }}
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-full border px-4 py-2 text-sm ${
            active === filter ? "border-accent text-accent" : "border-border text-muted"
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
}
