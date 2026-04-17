"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type MobileNavProps = {
  items: { href: string; label: string }[];
};

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen((p) => !p)}
        className="rounded-xl border border-border bg-surface p-2"
        aria-label="Toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>
      {open ? (
        <div className="absolute left-0 top-16 w-full border-b border-border bg-bg p-4">
          <div className="container-shell flex flex-col gap-3">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-muted">
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      ) : null}
    </>
  );
}
