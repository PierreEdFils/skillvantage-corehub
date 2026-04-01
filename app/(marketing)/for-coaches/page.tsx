import Link from "next/link";
import { Calendar, DollarSign, LineChart, Users, BookOpen, Shield } from "lucide-react";
import SectionHeader from "@/components/shared/section-header";
import FadeIn from "@/components/shared/fade-in";

export default function ForCoachesPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
              For Coaches
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Grow Your <span className="gradient-text">Coaching Empire</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Build your brand, reach more clients, manage sessions, sell courses,
              and grow recurring revenue on one intelligent platform.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="rounded-full bg-brand-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
              >
                Start Coaching
              </Link>
              <Link
                href="/demo"
                className="rounded-full border border-gray-200 px-8 py-4 text-lg font-medium text-gray-700 transition hover:bg-white"
              >
                Book a Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Everything You Need to Scale"
            description="From client acquisition to analytics, SkillVantage helps coaches grow like modern businesses."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Users, title: "Get More Clients", text: "Reach a high-intent marketplace of professionals and employers." },
              { icon: Calendar, title: "Manage Scheduling", text: "Offer 1:1 sessions, workshops, and group programs with ease." },
              { icon: DollarSign, title: "Get Paid Seamlessly", text: "Simple payments, payout clarity, and clean earnings tracking." },
              { icon: BookOpen, title: "Sell Courses", text: "Bundle expertise into scalable digital learning products." },
              { icon: LineChart, title: "Track Growth", text: "See revenue trends, client retention, and engagement in one place." },
              { icon: Shield, title: "Build Trust", text: "Profiles, reviews, certifications, and premium presentation built in." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
                    <feature.icon className="h-6 w-6 text-brand-blue-700" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <FadeIn>
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900">Estimate Your Earnings</h2>
              <p className="mt-4 text-lg text-gray-600">
                Just 20 sessions per month at \$150/session can translate into meaningful monthly revenue.
              </p>
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
                <div className="mb-4 flex justify-between text-sm text-gray-500">
                  <span>20 sessions/month</span>
                  <span>\$150/session</span>
                </div>
                <div className="rounded-xl bg-brand-blue-50 p-6 text-center">
                  <p className="text-sm text-gray-500">Estimated Monthly Revenue</p>
                  <p className="mt-2 text-4xl font-extrabold text-gray-900">\$3,000</p>
                  <p className="mt-2 text-sm text-emerald-600">Scale further with courses and group coaching</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">How it works</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Create your public coaching profile",
                  "Set your pricing, availability, and specialties",
                  "Accept bookings from professionals and employers",
                  "Run sessions, track progress, and grow revenue"
                ].map((step, i) => (
                  <div key={i} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange-500 text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
