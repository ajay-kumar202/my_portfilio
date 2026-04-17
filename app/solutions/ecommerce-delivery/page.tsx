import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ecommerce & Delivery Systems | Ajay Kumar",
  description: "Commerce backend systems covering checkout, fulfillment, delivery, and coupon management.",
  keywords: ["ecommerce backend architect", "delivery management software", "coupon management system"],
  path: "/solutions/ecommerce-delivery"
});

export default function Page() {
  return (
    <SolutionPage
      title="Commerce & Delivery Systems"
      summary="Build conversion-focused ecommerce and delivery systems with robust backend architecture."
      category="Commerce"
      path="/solutions/ecommerce-delivery"
      keywordHeading="Scalable ecommerce backend architecture for growth-stage teams"
      bullets={["Ecommerce Platform", "Food Delivery", "Delivery Management", "Coupon Management"]}
      faq={[
        {
          question: "Can you improve checkout performance and conversion rates?",
          answer: "Yes, we redesign order and payment flows to reduce failure points and increase completion rates."
        },
        {
          question: "Do you build coupon and promotion engines?",
          answer: "Yes, rule-driven coupon systems are built with fraud safeguards and campaign flexibility."
        },
        {
          question: "Can this backend support peak sales seasons?",
          answer: "Yes, we use cache layers and queue-backed workflows to handle traffic surges reliably."
        }
      ]}
    />
  );
}
