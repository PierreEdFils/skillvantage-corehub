import Link from "next/link";
import { ArrowRight, Brain, GraduationCap, Sparkles, Star, TrendingUp, Users } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import SectionHeader from "@/components/shared/section-header";

export default function ForProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
              For Professionals
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Accelerate Your <span className="gradient-text">Career Growth</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Learn high-value skills, work with great coaches, earn credentials,
              and unlock your next opportunity faster.
            </p>
            <div className="mt-10">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
              >
                Start Free
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Why Professionals Love CoreHub"
            description="Personalized learning + human coaching = faster growth."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Brain, title: "AI Coach Matching", text: "Find coaches aligned to your goals, budget, and style." },
              { icon: GraduationCap, title: "Personalized Learning Paths", text: "Know what to learn next based on your current level." },
              { icon: Sparkles, title: "Smart Recommendations", text: "Receive courses, resources, and coaches tailored to you." },
              { icon: Star, title: "Credentials & Badges", text: "Show your progress with shareable proof of learning." },
              { icon: TrendingUp, title: "Career Advancement", text: "Build real momentum toward promotions and new opportunities." },
              { icon: Users, title: "Community Support", text: "Grow alongside peers and mentors in an active learning ecosystem." }
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
                Example Learning Path
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Leadership & Management
              </h3>
              <div className="mt-6 rounded-full bg-gray-200 h-2">
                <div className="h-2 w-[68%] rounded-full bg-brand-orange-500" />
              </div>
              <p className="mt-2 text-sm text-gray-500">68% complete · 4 modules left</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">
                Built to help you move faster
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Unlike traditional course platforms, CoreHub combines expert-led coaching,
                structured learning, and career outcomes in one experience.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700">
                <li>• Learn what actually matters for your next step</li>
                <li>• Get direct support from vetted coaches</li>
                <li>• Build consistency with streaks and progress tracking</li>
                <li>• Turn skill growth into real opportunities</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
