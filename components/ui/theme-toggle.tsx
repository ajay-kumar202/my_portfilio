"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="rounded-xl border border-border bg-surface p-2 text-muted hover:text-accent"
      >
        <Moon size={18} />
      </button>
    );
  }

  const isDark = resolvedTheme !== "light";
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-xl border border-border bg-surface p-2 text-muted hover:text-accent"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
