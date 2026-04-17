import { SolutionPage } from "@/components/sections/solution-page";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Enterprise Management Solutions | Ajay Kumar",
  description: "Enterprise-grade management systems for education, healthcare, legal, and operational teams.",
  keywords: ["enterprise management software", "school management system", "backend architect"],
  path: "/solutions/enterprise-management"
});

export default function Page() {
  return (
    <SolutionPage
      title="Enterprise & Management Systems"
      summary="Scalable management platforms for schools, hospitals, legal practices, booking systems, and operations-driven businesses."
      category="Enterprise"
      path="/solutions/enterprise-management"
      keywordHeading="Senior Laravel Developer for enterprise management systems"
      bullets={["School Management", "Hospital Management", "Lawyer Case Management", "Appointment Booking", "Gym Management"]}
      faq={[
        {
          question: "Can this service modernize an existing legacy Laravel ERP?",
          answer: "Yes, we execute phased modernization that keeps business continuity while reducing technical debt."
        },
        {
          question: "Do you support role-based workflows for large organizations?",
          answer: "Yes, architecture includes granular access control, auditability, and performance-oriented data models."
        },
        {
          question: "Can integrations be added with existing CRMs and accounting systems?",
          answer: "Yes, API-first integration workflows are planned from day one for enterprise interoperability."
        }
      ]}
    />
  );
}
