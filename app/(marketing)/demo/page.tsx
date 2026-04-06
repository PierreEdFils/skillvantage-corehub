"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/shared/fade-in";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function DemoPage() {
  const searchParams = useSearchParams();
  const coach = searchParams.get("coach");
  const source = searchParams.get("source");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <FadeIn>
            <div>
              <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
                Book a Demo
              </div>
              <h1 className="text-5xl font-extrabold text-gray-900">
                See SkillVantage <span className="gradient-text">in Action</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Learn how CoreHub can help your organization develop stronger talent,
                connect employees with coaching, and measure growth more effectively.
              </p>

              {(coach || source) && (
                <div className="mt-6 rounded-2xl border border-brand-blue-200 bg-brand-blue-50 p-4 text-sm text-brand-blue-800">
                  {coach
                    ? `You came from ${coach}'s coach profile. We'll tailor the walkthrough to that experience.`
                    : `You came from the ${source} flow. We'll tailor the walkthrough to that use case.`}
                </div>
              )}

              <div className="mt-10 rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">What to expect</h3>
                <ul className="mt-4 space-y-3 text-gray-600">
                  <li>• A guided product walkthrough</li>
                  <li>• A look at coach, learner, and employer experiences</li>
                  <li>• Discussion of pricing and fit for your organization</li>
                  <li>• Q&A tailored to your use case</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
              {!submitted ? (
                <>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">Request your demo</h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <Input label="Full Name" placeholder="Jane Doe" />
                    <Input label="Work Email" placeholder="jane@company.com" />
                    <Input label="Company" placeholder="Acme Inc." />
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Company Size
                      </label>
                      <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue-500 focus:bg-white focus:ring-2 focus:ring-brand-blue-500">
                        <option>1–10</option>
                        <option>11–50</option>
                        <option>51–200</option>
                        <option>201–1000</option>
                        <option>1000+</option>
                      </select>
                    </div>
                    <Textarea
                      label="What are you hoping to solve?"
                      placeholder="Tell us about your talent development goals..."
                    />
                    <Button type="submit" fullWidth size="lg">
                      Book My Demo
                    </Button>
                  </form>
                </>
              ) : (
                <div className="space-y-5">
                  <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    Request received
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Your demo is queued</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      In a production flow this would hand off to scheduling and email
                      confirmation. For the investor demo, the request stays frontend-only
                      while still feeling complete.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm font-semibold text-gray-900">Next in the story</p>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li>• Personalized follow-up appears ready</li>
                      <li>• Role-based dashboards are available immediately</li>
                      <li>• The flow works end-to-end without backend dependencies</li>
                    </ul>
                  </div>

                  <Button
                    type="button"
                    fullWidth
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Request
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
