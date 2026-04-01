"use client";

import { useState } from "react";
import { Check, Crown, Building2, Users, Zap, HelpCircle } from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import SectionHeader from "@/components/shared/section-header";
import { PRICING_PLANS } from "@/lib/constants";
import Link from "next/link";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  const icons = [Zap, Crown, Users, Building2];
  const formatPrice = (amount: number) => `$${amount}`;

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeader
          badge="Simple, Transparent Pricing"
          title="Invest in Growth, Not Complexity"
          description="Start free. Upgrade when you’re ready. Cancel anytime."
        />

        <FadeIn delay={0.1}>
          <div className="mb-12 flex justify-center">
            <div className="inline-flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  billing === "monthly"
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-500"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                  billing === "annual"
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-500"
                }`}
              >
                Annual
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                  Save 40%
                </span>
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PLANS.map((plan, i) => {
            const Icon = icons[i];
            const price =
              plan.monthly === null || plan.annual === null
                ? "Custom"
                : billing === "monthly"
                ? formatPrice(plan.monthly)
                : formatPrice(plan.annual);

            return (
              <FadeIn key={plan.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-all hover:shadow-xl ${
                    plan.popular
                      ? "border-brand-orange-300 ring-2 ring-brand-orange-500 shadow-lg shadow-brand-orange-100"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-gradient-to-r from-brand-blue-700 to-brand-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-100">
                      <Icon className="h-5 w-5 text-brand-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {price}
                    </span>
                    {price !== "Custom" && <span className="text-gray-500">/mo</span>}
                  </div>

                  <Link
                    href={plan.name === "Enterprise" ? "/demo" : "/signup"}
                    className={`mb-6 block rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
                      plan.popular
                        ? "bg-brand-orange-500 text-white hover:bg-brand-orange-600"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="flex-1">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      What’s included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-brand-blue-200 bg-gradient-to-r from-brand-blue-50 to-brand-orange-50 p-8 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Are you a Coach?</h3>
              <p className="mt-1 text-gray-600">
                Join for free and keep 80% of your earnings. We only succeed when you do.
              </p>
            </div>
            <Link
              href="/for-coaches"
              className="rounded-full bg-brand-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-600"
            >
              Start Coaching
            </Link>
          </div>
        </FadeIn>

        <div className="mx-auto mt-20 max-w-3xl">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I switch plans anytime?",
                a: "Yes, you can upgrade or downgrade anytime."
              },
              {
                q: "Is there a free trial?",
                a: "Yes, paid plans include a 14-day trial."
              },
              {
                q: "How does coach pricing work?",
                a: "Coaches join free and SkillVantage takes a platform fee from completed transactions."
              },
              {
                q: "Do you offer enterprise discounts?",
                a: "Yes, enterprise plans are customized based on team size and needs."
              }
            ].map((faq, i) => (
              <details key={i} className="rounded-xl border border-gray-200 bg-white">
                <summary className="flex cursor-pointer items-center justify-between p-5">
                  <span className="text-sm font-semibold text-gray-900">{faq.q}</span>
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
