const industries = ["Education", "Healthcare", "Logistics", "Ecommerce", "Social Media", "Real Estate", "Fintech"];

export function IndustryGrid() {
  return (
    <section className="container-shell py-10">
      <h2 className="text-3xl font-bold">Industries Served</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {industries.map((industry) => (
          <article key={industry} className="bento-card p-4 text-sm font-medium text-muted">
            {industry}
          </article>
        ))}
      </div>
    </section>
  );
}
