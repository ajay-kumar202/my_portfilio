"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="container-shell py-14 md:py-20">
      <div className="bento-card p-8 md:p-12">
        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-accent">
            Senior Software Architect
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            Laravel | Node.js | SaaS
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            8+ Years Experience
          </span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold md:text-6xl"
        >
          Ajay Kumar
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 max-w-3xl text-2xl font-semibold text-accentSecondary md:text-4xl"
        >
          Architecting Scalable Systems for Global Brands
        </motion.h2>
        <p className="mt-5 max-w-3xl text-base text-muted md:text-lg">
          I build enterprise platforms, logistics systems, social products, e-commerce engines, and AI-powered SaaS
          solutions for startups, agencies, and global businesses.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
          <span>Global Remote Delivery</span>
          <span className="text-border">|</span>
          <span>Backend Architect</span>
          <span className="text-border">|</span>
          <span>High-Performance Systems</span>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="rounded-xl bg-accent px-5 py-3 font-semibold text-black">
            View Projects
          </Link>
          <Link
            href={siteConfig.calendly}
            target="_blank"
            className="rounded-xl border border-border bg-surface px-5 py-3 font-semibold"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
