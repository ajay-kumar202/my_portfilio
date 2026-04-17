import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="container-shell py-10">
      <div className="bento-card p-8 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s Build Your Next Platform</h2>
        <p className="mt-3 text-sm text-muted">
          Available for architecture consulting, platform modernization, and end-to-end backend leadership.
        </p>
        <Link href="/contact" className="mt-6 inline-block rounded-xl bg-accent px-5 py-3 font-semibold text-black">
          Start a Conversation
        </Link>
      </div>
    </section>
  );
}
