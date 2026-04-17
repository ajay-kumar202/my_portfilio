const faqs = [
  {
    question: "What types of backend systems do you specialize in?",
    answer: "Enterprise platforms, logistics systems, ecommerce engines, social products, and AI SaaS backends."
  },
  {
    question: "Can you modernize legacy Laravel applications?",
    answer: "Yes, with phased refactoring plans that reduce risk while improving performance and maintainability."
  },
  {
    question: "Do you support architecture consulting for distributed teams?",
    answer: "Yes, including roadmap planning, platform audits, and execution support."
  }
];

export function FAQ() {
  return (
    <section className="container-shell py-10">
      <h2 className="text-3xl font-bold">FAQ</h2>
      <div className="mt-6 space-y-3">
        {faqs.map((item) => (
          <details key={item.question} className="bento-card p-5">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
