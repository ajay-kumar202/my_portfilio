import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-accent">
          AJAY KUMAR
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-text">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
