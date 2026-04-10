export const SITE_CONFIG = {
  name: "SkillVantage CoreHub",
  description:
    "The operating system for workforce development — connecting coaches, professionals, and employers through one intelligent platform.",
  url: "https://skillvantage-corehub.vercel.app"
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/coaching-products", label: "Coaching Products" },
  { href: "/upskilling-bridge-lms", label: "Upskilling Bridge (LMS)" },
  { href: "/coachhub", label: "CoachHub" },
  { href: "/nova-coaching-framework", label: "NOVA Coaching Framework" },
  { href: "/signup", label: "Get Started", primary: true }
];

export const STATS = [
  { value: 500, suffix: "+", label: "Expert Coaches" },
  { value: 10000, suffix: "+", label: "Professionals Growing" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 94, suffix: "%", label: "Satisfaction Rate" }
];

export const COACH_CATEGORIES = [
  "All",
  "Leadership",
  "Career Strategy",
  "Communication",
  "Tech Leadership",
  "Entrepreneurship",
  "Team Performance",
  "Executive Coaching"
];

export const PRICING_PLANS = [
  {
    name: "Free",
    subtitle: "For curious learners",
    monthly: 0,
    annual: 0,
    popular: false,
    cta: "Get Started Free",
    features: [
      "Access to 3 free courses",
      "Community access",
      "Basic skill assessment",
      "Limited coach discovery"
    ]
  },
  {
    name: "Pro",
    subtitle: "For serious professionals",
    monthly: 49,
    annual: 29,
    popular: true,
    cta: "Start Pro Trial",
    features: [
      "Unlimited course access",
      "2 x 1:1 coaching sessions/month",
      "AI coach matching",
      "Personalized learning paths",
      "Certificates and badges",
      "Priority support"
    ]
  },
  {
    name: "Business",
    subtitle: "For teams & managers",
    monthly: 149,
    annual: 99,
    popular: false,
    cta: "Start Business Trial",
    features: [
      "Everything in Pro",
      "Up to 25 seats",
      "Manager dashboard",
      "Learning path assignment",
      "Reports & analytics",
      "SSO support"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    monthly: null,
    annual: null,
    popular: false,
    cta: "Contact Sales",
    features: [
      "Unlimited seats",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated CSM",
      "SLA support",
      "Custom branding"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote:
      "SkillVantage helped me grow my coaching business from \$2K to \$15K/month in just 6 months.",
    name: "Sarah Chen",
    role: "Executive Coach",
    persona: "Coach",
    avatar: "SC"
  },
  {
    quote:
      "My coach helped me identify skill gaps and land a Senior PM role at a top tech company.",
    name: "Marcus Johnson",
    role: "Senior Product Manager",
    persona: "Professional",
    avatar: "MJ"
  },
  {
    quote:
      "We reduced turnover by 34% after implementing SkillVantage across our engineering team.",
    name: "Elena Rodriguez",
    role: "VP of People",
    persona: "Employer",
    avatar: "ER"
  }
];
