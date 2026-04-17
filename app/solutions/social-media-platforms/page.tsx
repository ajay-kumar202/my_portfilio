import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Social Media Platforms | Ajay Kumar",
  description: "Scalable social, streaming, and community platforms with high-concurrency backend systems.",
  keywords: ["social media backend development", "streaming platform architecture", "dating app backend"],
  path: "/solutions/social-media-platforms"
});

export default function Page() {
  return (
    <SolutionPage
      title="Social, Media & Streaming Platforms"
      summary="High-performance systems for social apps, dating products, media streaming, and freelance marketplaces."
      category="Social"
      path="/solutions/social-media-platforms"
      keywordHeading="Backend systems for social media and streaming products"
      bullets={["Social Media App", "Dating App", "Live Sports Streaming", "Movie Platform", "Freelance Portal"]}
      faq={[
        {
          question: "Can you handle high concurrency for social feeds?",
          answer: "Yes, architecture is optimized for feed fan-out, caching, and real-time engagement services."
        },
        {
          question: "Do you support trust and moderation workflows?",
          answer: "Yes, moderation pipelines and abuse controls are integrated as core platform capabilities."
        },
        {
          question: "Can we launch fast and scale later?",
          answer: "Yes, we design for phased growth with clean service boundaries and observability from day one."
        }
      ]}
    />
  );
}
