import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-shell flex flex-col justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            aria-label="LinkedIn profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[#0A66C2] text-white hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            aria-label="GitHub profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-[#181717] text-white hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.92 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.25 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.21v3.27c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
            </svg>
          </Link>
          <Link
            href="/contact"
            aria-label="Contact page"
            className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
