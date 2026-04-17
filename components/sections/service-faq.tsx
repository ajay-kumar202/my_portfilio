type ServiceFAQItem = { question: string; answer: string };

export function ServiceFAQ({ items }: { items: ServiceFAQItem[] }) {
  return (
    <section className="bento-card p-8">
      <h2 className="text-2xl font-bold">Service FAQs</h2>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-xl border border-border p-4">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-2 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
