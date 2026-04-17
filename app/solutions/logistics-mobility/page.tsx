import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Logistics & Mobility Platforms | Ajay Kumar",
  description: "Backend architecture for mobility and logistics apps with dispatch, routing, and real-time operations.",
  keywords: ["logistics platform development", "taxi app backend", "mobility architecture"],
  path: "/solutions/logistics-mobility"
});

export default function Page() {
  return (
    <SolutionPage
      title="Logistics & Mobility Platforms"
      summary="Platform engineering for online taxi, public transport, kid pickup, and delivery orchestration products."
      category="Logistics"
      path="/solutions/logistics-mobility"
      keywordHeading="Backend architect for logistics and mobility platforms"
      bullets={["Online Taxi", "Share Taxi", "Public Transport Bus", "Public Transport Train", "Kid Pickup"]}
      faq={[
        {
          question: "Can you optimize dispatch systems for real-time mobility apps?",
          answer: "Yes, we use event-driven backend patterns and caching strategies to keep dispatch latency low."
        },
        {
          question: "Do you support geolocation-heavy workloads?",
          answer: "Yes, architecture includes geospatial indexing and queue-based processing for route intelligence."
        },
        {
          question: "Can this service scale to multiple cities?",
          answer: "Yes, multi-tenant, region-aware deployments are built into platform planning."
        }
      ]}
    />
  );
}
