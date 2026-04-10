import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  Eye,
  LayoutDashboard,
  Route,
  Sparkles,
  Target,
  Users
} from "lucide-react";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Executive Walkthrough | SkillVantage CoreHub",
  description:
    "A non-technical walkthrough that presents SkillVantage CoreHub page by page and ends with a direct comparison to the local SkillVantage LMS demo.",
  robots: {
    index: false,
    follow: false
  }
};

const openerPoints = [
  "This is not only a training site. It feels like a full business platform.",
  "It serves three audiences clearly: professionals, coaches, and employers.",
  "It looks easier to sell because each audience sees immediate value.",
  "It gives a stronger picture of how SkillVantage can grow revenue over time."
];

const walkthroughSteps = [
  {
    label: "Step 1",
    title: "Homepage",
    href: "/",
    icon: Compass,
    whyItMatters:
      "Start here to frame the story. The homepage presents SkillVantage as the operating system for talent growth, which immediately sounds bigger than a typical course platform.",
    whatToSay:
      "This homepage tells a company story. It says SkillVantage is building a connected ecosystem, not just hosting learning content.",
    script: [
      "I want to start with the homepage because this is where the whole business story becomes clear very quickly.",
      "What I like here is that the message is bigger than courses. It positions SkillVantage as the operating system for talent growth, which feels much more valuable and much more scalable.",
      "For an investor or leadership audience, that matters because it sounds like a platform business, not a single-use tool.",
      "Even before we click anywhere else, the homepage already suggests that SkillVantage can serve multiple audiences and support long-term growth."
    ]
  },
  {
    label: "Step 2",
    title: "Marketplace",
    href: "/marketplace",
    icon: Sparkles,
    whyItMatters:
      "The marketplace shows discovery and selection. That makes the business feel more alive because people can browse coaches and services instead of only consuming static content.",
    whatToSay:
      "This is important because it shows a buying layer. The platform is not only delivering education, it is helping people find the right expertise.",
    script: [
      "This page is one of the biggest reasons the new version feels stronger than the older demo.",
      "The marketplace makes the product feel active and commercial. Users are not just sitting in a training library. They are discovering people, services, and value.",
      "That is important because it creates a richer business model. SkillVantage is not only distributing content, it is helping connect demand with expertise.",
      "For me, this makes the company feel much closer to a real platform that can generate recurring activity and revenue."
    ]
  },
  {
    label: "Step 3",
    title: "For Coaches",
    href: "/for-coaches",
    icon: Briefcase,
    whyItMatters:
      "This page explains why coaches would join the platform. It broadens the business story from learner experience to supply-side growth and monetization.",
    whatToSay:
      "This tells me SkillVantage can attract providers, not just users. That is a more scalable business model.",
    script: [
      "I like to show this page early because it proves the platform is not only built for learners.",
      "It shows there is a clear reason for coaches to join, grow, and earn on the platform.",
      "That matters strategically because two-sided businesses are usually stronger than one-sided experiences. If SkillVantage can attract quality coaches, the product becomes more defensible over time.",
      "So this page helps leadership see that the business can grow from both the user side and the provider side."
    ]
  },
  {
    label: "Step 4",
    title: "For Professionals",
    href: "/for-professionals",
    icon: BookOpen,
    whyItMatters:
      "This page makes the learner story personal and practical. It shows career outcomes, coaching support, and guided growth rather than just course access.",
    whatToSay:
      "The value feels more human here. It is not just ‘take a class.’ It is ‘grow your career with support, structure, and direction.’",
    script: [
      "This page is where the platform starts to feel very relatable for an individual user.",
      "Instead of just saying ‘here are some courses,’ it tells a fuller story about career growth, guidance, and practical support.",
      "That is a big improvement in positioning because people usually buy outcomes, not content alone.",
      "This makes the product easier to believe in as something that can genuinely help a professional move forward."
    ]
  },
  {
    label: "Step 5",
    title: "For Employers",
    href: "/for-employers",
    icon: Building2,
    whyItMatters:
      "This page makes the enterprise case. It shifts the conversation from individual learning into workforce development, reporting, retention, and ROI.",
    whatToSay:
      "This is where the business gets bigger. Employers are usually the strongest buyer story because they bring budget and recurring value.",
    script: [
      "This page is probably the most important business page in the marketing flow.",
      "It shifts the conversation from individual self-improvement to workforce development, which is a much larger and more strategic opportunity.",
      "For a non-technical decision maker, this page answers the question: who is really paying for this at scale?",
      "The answer becomes much clearer here, because employers can see reporting, team development, and business impact."
    ]
  },
  {
    label: "Step 6",
    title: "Coach Dashboard",
    href: "/dashboard/coach",
    icon: LayoutDashboard,
    whyItMatters:
      "The dashboard makes the platform feel real. It shows what day-to-day use could look like for a coach running sessions, clients, and revenue.",
    whatToSay:
      "This is where the product stops feeling like a marketing site and starts feeling like an actual operating platform.",
    script: [
      "Now I want to move from the marketing story into the actual product experience.",
      "This dashboard helps a viewer imagine what a coach would really do inside the platform day to day.",
      "That is important because it makes the business feel operational. It is no longer just a promise on a landing page.",
      "When a product has believable working surfaces like this, it feels much closer to investor-demo quality."
    ]
  },
  {
    label: "Step 7",
    title: "Professional Dashboard",
    href: "/dashboard/professional",
    icon: Users,
    whyItMatters:
      "This demonstrates a guided growth journey for learners. The experience feels fuller than a simple list of modules because it includes progress, coaching, and next-step momentum.",
    whatToSay:
      "The learner story looks more complete here. It feels like a guided path, not just a content shelf.",
    script: [
      "This view is useful because it shows the learner experience as an ongoing journey instead of a one-time transaction.",
      "You can feel that there is direction, accountability, and momentum built into the product.",
      "That is stronger than a traditional LMS feeling, where the user often just browses modules and leaves.",
      "Here the product looks like it is helping the user progress, which is much more compelling."
    ]
  },
  {
    label: "Step 8",
    title: "Employer Dashboard",
    href: "/dashboard/employer",
    icon: BarChart3,
    whyItMatters:
      "End the product tour here because it is the strongest executive page. It shows measurement, team visibility, assignments, and business outcomes.",
    whatToSay:
      "This page makes it easiest for leadership to imagine paying for the platform because it ties activity to organizational value.",
    script: [
      "I like to finish the live tour here because this is the page most likely to resonate with leadership immediately.",
      "It turns the product from a user experience into a management and decision-making tool.",
      "That matters because investors and executives usually want to see not just engagement, but visibility, control, and measurable outcomes.",
      "This is the point in the demo where the platform feels most ready for enterprise conversations."
    ]
  }
];

const currentSiteStrengths = [
  "Clearer story from top to bottom",
  "Three buyer/user groups instead of one main learner lens",
  "More believable business model because of marketplace plus dashboards",
  "Stronger enterprise feel through reporting and employer flows",
  "Better executive presentation because each page supports the same platform narrative"
];

const localDemoPages = [
  {
    name: "index.html",
    summary:
      "Strong visual landing page focused on an AI coaching dashboard and persona interactions."
  },
  {
    name: "coachhub.html",
    summary:
      "Coach search and matching experience with profiles, expertise, and scheduling concepts."
  },
  {
    name: "coaching-products.html",
    summary:
      "Product showcase with comparisons, pricing thinking, and feature presentation."
  },
  {
    name: "training-modules.html",
    summary:
      "Training content and module-focused value proposition."
  },
  {
    name: "how-it-works.html",
    summary:
      "Framework-driven explanation of the coaching process and journey."
  },
  {
    name: "pricing.html, signup.html, dashboard-signup.html",
    summary:
      "Commercial and onboarding pages that support the demo flow."
  }
];

const comparisonRows = [
  {
    lens: "Overall business impression",
    corehub: "Feels like a connected platform business",
    demo: "Feels like a polished coaching and LMS demo",
    winner: "CoreHub"
  },
  {
    lens: "Audience coverage",
    corehub: "Professionals, coaches, and employers all have dedicated value",
    demo: "Primarily centered on coaching and learner flows",
    winner: "CoreHub"
  },
  {
    lens: "Executive buying story",
    corehub: "Easy to connect to workforce outcomes and enterprise value",
    demo: "Stronger as a concept demo than as an enterprise story",
    winner: "CoreHub"
  },
  {
    lens: "Marketplace and monetization",
    corehub: "Shows discovery, provider participation, and operational dashboards",
    demo: "Shows products and coaching, but the business ecosystem feels narrower",
    winner: "CoreHub"
  },
  {
    lens: "How complete it feels",
    corehub: "Feels closer to a product family with multiple working surfaces",
    demo: "Feels like a strong prototype with compelling presentation pages",
    winner: "CoreHub"
  },
  {
    lens: "Best use in a meeting",
    corehub: "Best for convincing leadership the company can scale",
    demo: "Best for showing creativity, design energy, and concept quality",
    winner: "CoreHub"
  }
];

export default function WalkthroughPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(27,95,157,0.12),_transparent_30%),linear-gradient(180deg,_#f8fbfe_0%,_#ffffff_30%,_#fff8f2_100%)] pt-28">
      <section className="px-6 pb-12 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge variant="brand" className="px-4 py-2 text-sm">
                Walkthrough For Your Boss
              </Badge>
              <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-tight text-brand-navy md:text-6xl">
                Present the new website
                <span className="gradient-text"> page by page</span>, then finish with a clear comparison
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600">
                This walkthrough is written for a non-technical leader. Start with the new
                CoreHub experience, guide her through the most important pages, and only at the
                end compare it with your local older demo in
                <span className="font-semibold text-brand-blue-700"> SkillVantage_Demo_Final_WithLogo</span>.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
                >
                  Start With Homepage
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/dashboard/employer"
                  className="focus-ring inline-flex items-center justify-center rounded-full border border-brand-border bg-white px-8 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Jump To Employer View
                </Link>
              </div>
            </div>

            <Card className="border-brand-border bg-white/90 p-8 shadow-2xl shadow-brand-blue-100/40">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-600">
                Best opening line
              </p>
              <p className="mt-4 text-2xl font-bold leading-9 text-brand-navy">
                “This version makes SkillVantage feel like a full growth platform for people,
                coaches, and companies, not just a training demo.”
              </p>

              <div className="mt-8 space-y-4">
                {openerPoints.map((point) => (
                  <div key={point} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue-700" />
                    <p className="text-sm leading-7 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-brand-border bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Keep this private during Zoom
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The walkthrough is no longer in the main navigation, so it will not appear in
                  the header when you share the public-facing site. Keep this page open in a
                  separate tab or second screen and read from it while showing the real pages.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-600">
              Presentation Route
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-brand-navy">
              Walk her through the new site in this order
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The order matters. It starts broad, then becomes more concrete, and ends on the
              strongest executive proof point. That makes the whole presentation feel organized
              and easy to follow.
            </p>
          </div>

          <div className="grid gap-6">
            {walkthroughSteps.map((step) => (
              <Card key={step.title} className="border-brand-border bg-white/90 p-7 shadow-lg shadow-brand-blue-100/20">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-100 text-sm font-bold text-brand-orange-700">
                      {step.label.replace("Step ", "")}
                    </div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                      <step.icon className="h-6 w-6 text-brand-blue-700" />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-brand-navy">{step.title}</h3>
                      <Badge variant="info">{step.label}</Badge>
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Why this page matters
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{step.whyItMatters}</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                      What to say
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-700">{step.whatToSay}</p>

                    <div className="mt-5 rounded-3xl border border-brand-border bg-slate-50 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-orange-600">
                        Presenter Script
                      </p>
                      <div className="mt-3 space-y-3">
                        {step.script.map((line) => (
                          <p key={line} className="text-sm leading-7 text-slate-700">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-1">
                    <Link
                      href={step.href}
                      className="focus-ring inline-flex items-center justify-center rounded-full border border-brand-border bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                    >
                      Open Page
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="border-brand-border bg-brand-navy p-8 text-white shadow-2xl shadow-brand-blue-950/20">
            <div className="flex items-center gap-3">
              <Route className="h-6 w-6 text-brand-orange-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-300">
                Key Message
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold">
              Why the new site lands better before any comparison even starts
            </h2>
            <div className="mt-6 space-y-4">
              {currentSiteStrengths.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange-300" />
                  <p className="text-sm leading-7 text-brand-blue-100">{item}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6 md:grid-cols-3">
            <Card hover className="border-brand-border bg-white/85">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                <Eye className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">Looks bigger</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                It feels like a platform with multiple surfaces rather than one polished concept.
              </p>
            </Card>
            <Card hover className="border-brand-border bg-white/85">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                <Users className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">Feels more useful</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Each audience has a clear reason to care, which makes the product easier to understand.
              </p>
            </Card>
            <Card hover className="border-brand-border bg-white/85">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                <Target className="h-6 w-6 text-brand-blue-700" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-navy">Feels more sellable</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                The business value is easier to explain to buyers, partners, and leadership.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-600">
              Fair Comparison
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-brand-navy">
              What your older local demo does well
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The older demo in
              <span className="font-semibold text-brand-blue-700"> SkillVantage_Demo_Final_WithLogo</span>
              is not weak. It has strong design energy and a clear coaching concept. These are the
              major pages it presents well.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localDemoPages.map((page) => (
              <Card key={page.name} hover className="border-brand-border bg-white/90">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-orange-600">
                  Local Demo Page
                </p>
                <h3 className="mt-3 text-xl font-bold text-brand-navy">{page.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{page.summary}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-600">
              Final Comparison
            </p>
            <h2 className="mt-3 text-4xl font-extrabold text-brand-navy">
              Why CoreHub is the better version to show your boss
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The older demo is a compelling concept. CoreHub is the stronger executive presentation.
              It does a better job showing how SkillVantage can become a real platform business.
            </p>

            <div className="mt-6 rounded-3xl border border-brand-border bg-orange-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-orange-700">
                Script for the comparison
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                “I want to be fair to the older demo, because it has strong design energy and it
                communicates the original concept well. But if the goal is to present something to
                leadership or investors today, this new CoreHub version is stronger. It feels more
                complete, it serves more stakeholders, and it tells a clearer business story. The
                older demo shows a strong product idea. CoreHub shows a stronger company.” 
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-2xl shadow-brand-blue-100/30">
            <div className="grid grid-cols-[1.05fr_1fr_1fr_120px] border-b border-brand-border bg-slate-50 text-sm font-semibold text-slate-600">
              <div className="px-6 py-4">Decision lens</div>
              <div className="px-6 py-4 text-brand-blue-700">CoreHub</div>
              <div className="px-6 py-4">Older local demo</div>
              <div className="px-6 py-4 text-center">Winner</div>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.lens}
                className="grid grid-cols-[1.05fr_1fr_1fr_120px] border-b border-brand-border/70 last:border-b-0"
              >
                <div className="px-6 py-5 text-sm font-semibold text-brand-navy">{row.lens}</div>
                <div className="px-6 py-5 text-sm leading-6 text-slate-700">{row.corehub}</div>
                <div className="px-6 py-5 text-sm leading-6 text-slate-500">{row.demo}</div>
                <div className="flex items-center justify-center px-6 py-5">
                  <Badge variant="success" className="px-3 py-1.5">
                    {row.winner}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-orange-500 p-10 shadow-2xl shadow-brand-blue-200/50 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-200">
                Closing Line
              </p>
              <h2 className="mt-3 text-4xl font-extrabold leading-tight text-white">
                The older demo shows a strong idea.
                <br />
                CoreHub shows the stronger company.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-blue-100">
                If your goal is to convince a non-technical leader, this is the version that better
                communicates scale, clarity, and business potential.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-blue-800 transition hover:bg-slate-100"
              >
                Start Presentation
              </Link>
              <Link
                href="/walkthrough"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Stay On Walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
