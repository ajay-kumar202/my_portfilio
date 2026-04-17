const leadershipHighlights = [
  "Backend Team Lead at Intersys Ltd focused on architecture quality and delivery reliability.",
  "Led legacy refactoring programs to reduce technical debt and improve release confidence.",
  "Built reusable backend patterns that scaled multi-domain product teams."
];

export function ExperienceSection() {
  return (
    <section className="container-shell py-10">
      <div className="bento-card p-8">
        <h2 className="text-3xl font-bold">Experience & Leadership</h2>
        <p className="mt-3 text-sm text-muted">
          This section is intentionally structured so resume PDF data can be injected later through a data adapter.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-muted">
          {leadershipHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
