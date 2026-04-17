import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Real Estate & Proptech Solutions | Ajay Kumar",
  description: "Backend platforms for real estate products, event systems, and lead conversion operations.",
  keywords: ["real estate platform backend", "proptech development", "event management software"],
  path: "/solutions/real-estate-proptech"
});

export default function Page() {
  return (
    <SolutionPage
      title="Real Estate & Event Platforms"
      summary="Data-driven proptech and event platforms with lead lifecycle automation and robust backend workflows."
      category="Real Estate"
      path="/solutions/real-estate-proptech"
      keywordHeading="Real estate backend solutions for modern proptech products"
      bullets={["Real Estate Platform", "Event Management", "Lottery Platform"]}
      faq={[
        {
          question: "Can you build lead-focused real estate backend workflows?",
          answer: "Yes, we structure APIs around lead scoring, listing intelligence, and conversion tracking."
        },
        {
          question: "Do you support event ticketing and attendee systems?",
          answer: "Yes, the architecture covers registration, ticketing, and organizer reporting pipelines."
        },
        {
          question: "Can this integrate with CRMs?",
          answer: "Yes, we provide integration-ready APIs and webhook workflows for sales and marketing stacks."
        }
      ]}
    />
  );
}
