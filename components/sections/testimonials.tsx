const testimonials = [
  {
    quote: "Ajay brought enterprise-grade architecture discipline to our fast-moving product team.",
    author: "CTO, Intersys Partner"
  },
  {
    quote: "He redesigned our backend core and gave us both speed and reliability at scale.",
    author: "Product Director, Abtach"
  }
];

export function Testimonials() {
  return (
    <section className="container-shell py-10">
      <h2 className="text-3xl font-bold">Trusted by Growth-Focused Teams</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {testimonials.map((item) => (
          <article key={item.quote} className="bento-card p-6">
            <p className="text-sm text-muted">{item.quote}</p>
            <p className="mt-3 text-sm font-semibold text-accent">{item.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
