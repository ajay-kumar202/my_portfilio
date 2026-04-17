import Link from "next/link";

type PageCTAProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCTA({
  title,
  description,
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "View Projects",
  secondaryHref = "/#projects"
}: PageCTAProps) {
  return (
    <section className="bento-card p-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted">{description}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href={primaryHref} className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-black">
          {primaryLabel}
        </Link>
        <Link href={secondaryHref} className="rounded-xl border border-border px-5 py-3 text-sm font-semibold">
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
