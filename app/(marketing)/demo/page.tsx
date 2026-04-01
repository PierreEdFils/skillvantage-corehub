"use client";

import FadeIn from "@/components/shared/fade-in";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function DemoPage() {
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
                Learn how CoreHub can help your organization develop stronger talent, connect employees with coaching, and measure growth more effectively.
              </p>

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
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Request your demo</h2>
              <form className="space-y-4">
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
                <Textarea label="What are you hoping to solve?" placeholder="Tell us about your talent development goals..." />
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
                >
                  Book My Demo
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
