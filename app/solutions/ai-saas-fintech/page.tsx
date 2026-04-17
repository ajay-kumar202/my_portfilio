import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI SaaS & Fintech Solutions | Ajay Kumar",
  description: "AI-enabled SaaS, analytics automation, and fintech-style control panels for modern products.",
  keywords: ["AI SaaS development", "fintech backend architect", "automation systems"],
  path: "/solutions/ai-saas-fintech"
});

export default function Page() {
  return (
    <SolutionPage
      title="AI, SaaS & Fintech Solutions"
      summary="AI-assisted product architecture with secure admin workflows, automation, and real-time analytics."
      category="AI & Fintech"
      path="/solutions/ai-saas-fintech"
      keywordHeading="AI SaaS architecture and fintech backend engineering"
      bullets={["AI Meal Planner", "SaaS Dashboards", "Analytics / Automation Systems", "Fintech-style Admin Panels"]}
      faq={[
        {
          question: "Can you add AI workflows into existing SaaS products?",
          answer: "Yes, we layer AI-enabled services with safe rollout strategies and measurable business outcomes."
        },
        {
          question: "Do you design fintech-style admin control systems?",
          answer: "Yes, we build compliance-aware control planes with role security and operational audit trails."
        },
        {
          question: "Can these systems scale globally?",
          answer: "Yes, deployments are designed for regional scale, reliability, and observability."
        }
      ]}
    />
  );
}
