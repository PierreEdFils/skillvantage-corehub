import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  MessageSquare,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import AnimatedCounter from "@/components/shared/animated-counter";
import SectionHeader from "@/components/shared/section-header";
import { STATS, TESTIMONIALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-200 via-brand-blue-100 to-brand-blue-50" />
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-brand-blue-400/35 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-brand-blue-300/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-blue-100 px-3 py-1 text-xs font-medium text-brand-blue-700 sm:text-sm">
                <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Coaching Optimization &amp; Resource Ecosystem: Human Upskilling Bridge</span>
                <span className="relative inline-flex pb-1 text-brand-orange-500">
                  <span className="text-[0.95rem] font-black uppercase leading-none tracking-[-0.05em] sm:text-[1.05rem]">
                    CORE
                  </span>
                  <span className="absolute bottom-[0.08rem] right-[-0.85rem] text-[0.46rem] font-extrabold leading-none sm:bottom-[0.1rem] sm:right-[-0.94rem] sm:text-[0.52rem]">
                    Hub
                  </span>
                  <span className="absolute right-[-1.16rem] top-[0.04rem] text-[0.26rem] font-bold leading-none sm:right-[-1.28rem] sm:top-[0.05rem] sm:text-[0.3rem]">
                    TM
                  </span>
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="text-[2rem] font-medium italic leading-[1.15] text-gray-900 md:text-[2.35rem] lg:text-[2.7rem]"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                <span className="gradient-text">
                  Where Talent Grows, Coaches Scale, and Organizations Thrive
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="mx-auto mt-5 max-w-2xl text-gray-600"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                <span className="block text-[1.15rem] font-medium leading-[1.3] md:text-[1.25rem]">
                  Welcome to COREHUB™
                </span>
                <span className="block text-[1.15rem] font-normal leading-[1.3] md:text-[1.25rem]">
                  SkillVantage&apos;s Coaching &amp; Learning Management Platform
                </span>
                <br />
                <span className="block text-[1.5rem] font-bold leading-[1.25] md:text-[1.75rem]">
                  Your all-in-one ecosystem for coaching,
                </span>
                <span className="block text-[1.5rem] font-bold leading-[1.25] md:text-[1.75rem]">
                  skill development, and workforce transformation.
                </span>
                <br />
                <span className="block text-[1.02rem] font-normal leading-[1.35] md:text-[1.08rem]">
                  COREHUB™ seamlessly connects coaches, professionals, and employers through a single intelligent platform:
                </span>
                <span className="block text-[1.02rem] font-normal leading-[1.35] md:text-[1.08rem]">
                  Coaches scale and monetize their expertise within a dynamic marketplace;
                </span>
                <span className="block text-[1.02rem] font-normal leading-[1.35] md:text-[1.08rem]">
                  Professionals build critical skills, advance careers, and unlock new opportunities and
                </span>
                <span className="block text-[1.02rem] font-normal leading-[1.35] md:text-[1.08rem]">
                  Employers strengthen, upskill, and future-proof their workforce
                </span>
                <br />
                <span className="block text-[1.08rem] font-medium leading-[1.35] md:text-[1.15rem]">
                  Powered by AI-driven analytics and proven development methodologies,
                </span>
                <span className="block text-[1.08rem] font-normal leading-[1.35] md:text-[1.15rem]">
                  COREHUB™ delivers personalized coaching, measurable growth, and enterprise-level talent insights.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 mx-auto">
                <Link
                  href="/nova-coaching-framework"
                  className="group flex min-h-[84px] items-center justify-center rounded-3xl bg-brand-orange-500 px-6 py-4 text-center text-base font-semibold text-white shadow-xl shadow-brand-orange-200 transition-all hover:bg-brand-orange-600"
                >
                  <span className="max-w-[14ch] text-balance leading-tight">
                    NOVA™ Coaching Framework
                  </span>
                </Link>
                <Link
                  href="/pricing"
                  className="group flex min-h-[84px] items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 py-4 text-center text-base font-semibold text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
                >
                  <span className="leading-tight">Pricing Strategy</span>
                  <ArrowRight className="ml-2 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>

          </div>

          {/* DASHBOARD PREVIEW */}
          <FadeIn delay={0.5} className="mt-16">
            <div className="relative mx-auto max-w-5xl">
              <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex flex-1 justify-center">
                    <div className="rounded-md bg-gray-800 px-4 py-1 text-xs text-gray-400">
                      app.skillvantagecorehub.com/dashboard
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6">
                  <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                      { label: "Active Learners", value: "12,847", change: "+23%" },
                      { label: "Sessions This Month", value: "3,241", change: "+18%" },
                      { label: "Coach Revenue", value: "\$284K", change: "+31%" },
                      { label: "Completion Rate", value: "94.2%", change: "+5%" }
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-4"
                      >
                        <p className="text-xs text-gray-400">{stat.label}</p>
                        <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs text-emerald-400">{stat.change}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-48 rounded-xl border border-gray-700/50 bg-gray-800/50 p-4">
                      <p className="mb-3 text-sm text-gray-400">Revenue Growth</p>
                      <div className="flex h-32 items-end gap-2">
                        {[40, 55, 45, 65, 50, 75, 60, 80, 70, 90, 85, 100].map(
                          (h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-t bg-gradient-to-t from-brand-blue-700 to-brand-orange-400"
                              style={{ height: `${h}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-4">
                      <p className="mb-3 text-sm text-gray-400">Top Coaches</p>
                      {["Sarah Chen", "Marcus Johnson", "Elena Rodriguez"].map(
                        (name, i) => (
                          <div key={i} className="flex items-center gap-2 py-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-600 to-brand-orange-500 text-xs font-bold text-white">
                              {name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <div>
                              <p className="text-sm text-white">{name}</p>
                              <p className="text-xs text-gray-500">
                                {98 - i * 3}% rating
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-brand-blue-700/20 via-brand-blue-500/20 to-brand-orange-500/20 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-100 bg-gray-50/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
            Built for industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale">
            {["Google", "Microsoft", "Deloitte", "McKinsey", "Salesforce", "HubSpot"].map(
              (brand) => (
                <div key={brand} className="text-2xl font-bold text-gray-900">
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                    <Users className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 md:text-5xl">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 font-medium text-gray-500">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI FEATURES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            badge="Powered by AI"
            title="Intelligence at Every Step"
            description="Our AI engine personalizes the experience from matching to learning to workforce insights."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Sparkles,
                title: "Smart Coach Matching",
                description: "AI analyzes your goals, learning style, and budget to find your ideal coach."
              },
              {
                icon: LineChart,
                title: "Skill Gap Analysis",
                description: "Upload a resume or assess your team to identify development opportunities."
              },
              {
                icon: MessageSquare,
                title: "AI Learning Assistant",
                description: "24/7 support for questions, session summaries, and suggested next steps."
              },
              {
                icon: TrendingUp,
                title: "Predictive Analytics",
                description: "Employers get risk and retention insights before problems grow."
              },
              {
                icon: LayoutDashboard,
                title: "Smart Recommendations",
                description: "Courses, coaches, and learning paths tailored to each user."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "AI-assisted quality monitoring keeps coaching experiences consistent."
              }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                    <feature.icon className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="How It Works"
            description="Get started in minutes, see results in weeks."
          />

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description: "Tell us about your goals, skills, and preferences.",
                icon: Users
              },
              {
                step: "02",
                title: "Get AI Matched",
                description: "Our AI finds the right coaches and content for you.",
                icon: Brain
              },
              {
                step: "03",
                title: "Learn & Grow",
                description: "Attend sessions, complete courses, and track progress.",
                icon: GraduationCap
              },
              {
                step: "04",
                title: "Advance Faster",
                description: "Land promotions, build stronger teams, and grow.",
                icon: TrendingUp
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-700 to-brand-orange-500 shadow-lg shadow-brand-blue-200">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 mb-2 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Loved by Coaches, Professionals & Employers"
            description="Real outcomes for every side of the ecosystem."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-600 to-brand-orange-500 text-sm font-bold text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            title="Why SkillVantage Wins"
            description="See how we compare to the alternatives."
          />

          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-xl">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Feature
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-brand-orange-600">
                    SkillVantage
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    BetterUp
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    Udemy
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-gray-400">
                    LinkedIn Learning
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["1:1 Coaching", true, true, false, false],
                  ["Self-Paced Courses", true, false, true, true],
                  ["AI Coach Matching", true, true, false, false],
                  ["Employer Dashboards", true, true, false, true],
                  ["Skill Gap Analysis", true, false, false, false],
                  ["Coach Marketplace", true, false, false, false],
                  ["Certificates", true, false, true, true]
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="px-6 py-3 text-sm font-medium text-gray-700">
                      {row[0] as string}
                    </td>
                    {(row.slice(1) as boolean[]).map((value, j) => (
                      <td key={j} className="px-4 py-3 text-center">
                        {value ? (
                          <CheckCircle2
                            className={`mx-auto h-5 w-5 ${
                              j === 0 ? "text-emerald-500" : "text-gray-300"
                            }`}
                          />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-orange-500 p-12 text-center md:p-16">
              <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-brand-orange-300/25 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                  Ready to Transform Your
                  <br />
                  Talent Development?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-xl text-brand-blue-100">
                  Join the next generation of coaches, professionals, and employers growing with SkillVantage.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/signup"
                    className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-blue-700 transition hover:bg-gray-100"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/demo"
                    className="rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
