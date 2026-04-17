export type ProjectCategory =
  | "Enterprise"
  | "Logistics"
  | "Commerce"
  | "Social"
  | "Real Estate"
  | "AI & Fintech";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  results: string;
  techStack: string[];
  industries: string[];
  keywords: string[];
  featured: boolean;
  icon: string;
  heroImage: string;
};

export const projects: Project[] = [
  {
    slug: "school-management-suite",
    title: "School Management Suite",
    category: "Enterprise",
    summary: "Unified academic, attendance, and finance workflows across multi-campus institutions.",
    problem: "Schools were operating disconnected systems that increased admin overhead.",
    solution: "Built a modular Laravel backend with role-based portals and real-time notifications.",
    results: "Reduced manual reporting time by 65% and improved operational visibility.",
    techStack: ["Laravel", "MySQL", "Redis", "AWS"],
    industries: ["Education", "Enterprise"],
    keywords: ["school management software", "laravel ERP", "backend architect"],
    featured: true,
    icon: "GraduationCap",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "smart-logistics-orchestration",
    title: "Smart Logistics Orchestration",
    category: "Logistics",
    summary: "Dispatch and route optimization platform for taxi and delivery operations.",
    problem: "Fleet assignment delays were hurting ETAs and customer experience.",
    solution: "Designed event-driven dispatch services with queue-based job processing.",
    results: "Improved dispatch efficiency by 42% and lowered failed trip incidents.",
    techStack: ["Node.js", "Laravel", "PostgreSQL", "Socket.IO"],
    industries: ["Mobility", "Logistics"],
    keywords: ["taxi backend architecture", "logistics software", "nodejs laravel"],
    featured: true,
    icon: "Truck",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "ecommerce-delivery-core",
    title: "Ecommerce Delivery Core",
    category: "Commerce",
    summary: "Order lifecycle, coupon engine, and fulfillment APIs for growing marketplaces.",
    problem: "Legacy checkout architecture was causing cart abandonment and refund volume.",
    solution: "Rebuilt transactional APIs and introduced resilient payment/order state machines.",
    results: "Increased checkout completion by 23% and reduced payment mismatch errors.",
    techStack: ["Laravel", "MySQL", "AWS", "Docker"],
    industries: ["Ecommerce", "Retail"],
    keywords: ["ecommerce backend", "delivery management", "coupon management"],
    featured: true,
    icon: "ShoppingCart",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "social-streaming-network",
    title: "Social Streaming Network",
    category: "Social",
    summary: "High-concurrency social and media platform with live engagement features.",
    problem: "Engagement dropped due to slow feeds and unstable live session handling.",
    solution: "Engineered feed services and media delivery pipelines with caching strategy.",
    results: "Raised session duration by 31% and stabilized peak-hour streaming.",
    techStack: ["Node.js", "Laravel", "Redis", "AWS CloudFront"],
    industries: ["Social Media", "Entertainment"],
    keywords: ["social media app backend", "live streaming architecture"],
    featured: false,
    icon: "Radio",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "proptech-events-cloud",
    title: "Proptech & Events Cloud",
    category: "Real Estate",
    summary: "Property listings and event operations platform with integrated lead workflows.",
    problem: "Sales and ops teams lacked centralized data for event-driven lead conversion.",
    solution: "Built domain APIs for listings, schedules, and lead scoring.",
    results: "Accelerated lead response times by 50% and improved event conversion pipeline.",
    techStack: ["Laravel", "React", "MySQL", "AWS"],
    industries: ["Real Estate", "Events"],
    keywords: ["proptech platform", "real estate software", "event management"],
    featured: false,
    icon: "Building2",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "ai-fintech-automation-suite",
    title: "AI Fintech Automation Suite",
    category: "AI & Fintech",
    summary: "AI-assisted SaaS dashboards and automation systems for finance operations.",
    problem: "Teams needed real-time insights with lower manual analyst dependency.",
    solution: "Delivered analytics APIs, workflow automations, and role-secured admin panels.",
    results: "Cut reporting cycles from days to hours with audit-friendly data trails.",
    techStack: ["Node.js", "Laravel", "Python Services", "AWS"],
    industries: ["Fintech", "SaaS"],
    keywords: ["ai saas solutions", "fintech admin panel", "automation backend"],
    featured: true,
    icon: "Sparkles",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "employee-workforce-hub",
    title: "Employee Workforce Hub",
    category: "Enterprise",
    summary: "Centralized employee lifecycle, attendance, and payroll-ready backend operations.",
    problem: "HR and operations teams lacked a unified workflow across departments.",
    solution: "Implemented modular services for employee data, leave policies, and performance tracking.",
    results: "Decreased HR processing overhead by 38% and improved workforce visibility.",
    techStack: ["Laravel", "MySQL", "Redis", "AWS"],
    industries: ["HR Tech", "Enterprise"],
    keywords: ["employee management system", "laravel enterprise backend"],
    featured: false,
    icon: "Users",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "hospital-operations-platform",
    title: "Hospital Operations Platform",
    category: "Enterprise",
    summary: "Backend architecture for appointments, patient queues, and doctor scheduling.",
    problem: "Manual coordination was creating delays and patient dissatisfaction.",
    solution: "Created service-oriented APIs with role-based dashboards for staff and practitioners.",
    results: "Improved scheduling utilization and cut average waiting time by 29%.",
    techStack: ["Laravel", "PostgreSQL", "Redis", "AWS"],
    industries: ["Healthcare", "Enterprise"],
    keywords: ["hospital management platform", "healthcare backend architecture"],
    featured: false,
    icon: "HeartPulse",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "public-transit-command-center",
    title: "Public Transit Command Center",
    category: "Logistics",
    summary: "Real-time bus and train coordination with route compliance and ETA intelligence.",
    problem: "Transit operators had fragmented data and weak visibility into delays.",
    solution: "Developed event-stream processing and geospatial telemetry services.",
    results: "Increased on-time route adherence and improved commuter reliability scores.",
    techStack: ["Node.js", "Kafka", "PostgreSQL", "AWS"],
    industries: ["Transport", "Logistics"],
    keywords: ["public transport software", "logistics backend"],
    featured: false,
    icon: "Bus",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "food-delivery-fulfillment-cloud",
    title: "Food Delivery Fulfillment Cloud",
    category: "Commerce",
    summary: "Order orchestration and dispatch APIs for hyperlocal food delivery ecosystems.",
    problem: "High cancellation rates from delayed rider allocation and inventory mismatches.",
    solution: "Built resilient order state orchestration with fallback fulfillment rules.",
    results: "Reduced cancellations and improved fulfillment completion during peak hours.",
    techStack: ["Laravel", "Node.js", "Redis", "AWS"],
    industries: ["Food Tech", "Ecommerce"],
    keywords: ["food delivery backend", "order orchestration system"],
    featured: false,
    icon: "UtensilsCrossed",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "dating-engagement-platform",
    title: "Dating Engagement Platform",
    category: "Social",
    summary: "Matching, messaging, and moderation engine for a high-growth social app.",
    problem: "Retention suffered due to delayed matching and weak moderation tooling.",
    solution: "Implemented event-driven matching pipelines and trust-focused moderation services.",
    results: "Increased daily active usage and reduced moderation turnaround time.",
    techStack: ["Node.js", "Redis", "PostgreSQL", "AWS"],
    industries: ["Social", "Consumer Apps"],
    keywords: ["dating app backend", "social platform architecture"],
    featured: false,
    icon: "Heart",
    heroImage: "/profile-placeholder.svg"
  },
  {
    slug: "freelance-marketplace-core",
    title: "Freelance Marketplace Core",
    category: "Social",
    summary: "Project bidding, escrow-like flows, and reputation APIs for creator economies.",
    problem: "Platform trust and payout visibility were limiting repeat usage.",
    solution: "Designed auditable workflow services with milestone lifecycle automation.",
    results: "Improved buyer-seller transaction confidence and repeat booking rate.",
    techStack: ["Laravel", "MySQL", "Redis", "AWS"],
    industries: ["Marketplaces", "Social"],
    keywords: ["freelance portal backend", "marketplace architecture"],
    featured: false,
    icon: "BriefcaseBusiness",
    heroImage: "/profile-placeholder.svg"
  }
];

export const solutionRouteMap: Record<ProjectCategory, string> = {
  Enterprise: "/solutions/enterprise-management",
  Logistics: "/solutions/logistics-mobility",
  Commerce: "/solutions/ecommerce-delivery",
  Social: "/solutions/social-media-platforms",
  "Real Estate": "/solutions/real-estate-proptech",
  "AI & Fintech": "/solutions/ai-saas-fintech"
};
