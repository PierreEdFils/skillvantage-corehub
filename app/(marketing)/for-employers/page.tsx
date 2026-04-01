import Link from "next/link";
import { BarChart3, Briefcase, Brain, CheckCircle2, Shield, Users } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import FadeIn from "@/components/shared/fade-in";

export default function ForEmployersPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
              For Employers
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Build an <span className="gradient-text">Unstoppable Workforce</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Identify skill gaps, develop talent, reduce attrition, and connect your people to the right coaches and learning paths.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-full bg-brand-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="rounded-full border border-gray-200 px-8 py-4 text-lg font-medium text-gray-700"
              >
                View Pricing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Why Employers Choose CoreHub"
            description="SkillVantage helps HR, L&D, and managers align learning with business outcomes."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "Skill Gap Analysis", text: "See where your team needs development and where risk is rising." },
              { icon: Users, title: "Team Development", text: "Assign paths, coaching, and programs to targeted groups." },
              { icon: BarChart3, title: "Track ROI", text: "Measure engagement, completion, and impact with reporting dashboards." },
              { icon: Briefcase, title: "Retain Talent", text: "Upskill employees before disengagement becomes attrition." },
              { icon: Shield, title: "Enterprise Ready", text: "Support compliance, controls, and secure team access." },
              { icon: CheckCircle2, title: "Better Outcomes", text: "Create growth opportunities that strengthen performance and morale." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                    <item.icon className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange-600">
                Example ROI Snapshot
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs text-gray-500">Training ROI</p>
                  <p className="text-3xl font-extrabold text-gray-900">340%</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4">
                  <p className="text-xs text-gray-500">Completion Rate</p>
                  <p className="text-3xl font-extrabold text-gray-900">87%</p>
                </div>
                <div className="rounded-xl bg-brand-blue-50 p-4">
                  <p className="text-xs text-gray-500">Employees Active</p>
                  <p className="text-3xl font-extrabold text-gray-900">248</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4">
                  <p className="text-xs text-gray-500">Attrition Reduction</p>
                  <p className="text-3xl font-extrabold text-gray-900">34%</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">Built for modern workforce strategy</h2>
              <p className="mt-4 text-lg text-gray-600">
                Move beyond disconnected training tools. Combine coaching, learning,
                analytics, and talent growth in one operating system.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Assign learning paths by role, team, or department",
                  "Provide managers with progress and engagement visibility",
                  "Connect employees with vetted coaches",
                  "Make development measurable and strategic"
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
