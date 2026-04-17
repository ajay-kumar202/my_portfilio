const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Client Satisfaction", value: "100%" }
];

export function StatsBar() {
  return (
    <section className="container-shell pb-10">
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <article key={s.label} className="bento-card p-6">
            <p className="text-3xl font-bold text-accent">{s.value}</p>
            <h3 className="mt-2 text-sm uppercase tracking-wide text-muted">{s.label}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
