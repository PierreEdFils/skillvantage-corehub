"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-2">
      <div className="hidden flex-col justify-center lg:flex">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
          <Sparkles className="h-4 w-4" />
          Start Free with SkillVantage
        </div>
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Create an account
          <br />
          and enter the demo.
        </h1>

        <div className="mt-10 space-y-4">
          {[
            "Role-based dashboard entry points",
            "Clean onboarding without backend complexity",
            "Investor-ready product walkthroughs"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-700">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Create account</h2>
          <p className="mt-2 text-sm text-gray-500">Frontend-only onboarding flow</p>
        </div>

        <form
          className="space-y-4"
          data-role="professional"
          onSubmit={(event) => {
            event.preventDefault();
            const role = event.currentTarget.getAttribute("data-role") || "professional";
            router.push(`/dashboard/${role}`);
          }}
        >
          <Input label="Full Name" placeholder="Jane Doe" />
          <Input label="Company or Brand" placeholder="SkillVantage" />
          <Input label="Email" type="email" placeholder="jane@company.com" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Join as
            </label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue-500 focus:bg-white focus:ring-2 focus:ring-brand-blue-500"
              defaultValue="professional"
              onChange={(event) => {
                const form = event.currentTarget.form;
                if (form) form.setAttribute("data-role", event.target.value);
              }}
            >
              <option value="professional">Professional</option>
              <option value="coach">Coach</option>
              <option value="employer">Employer</option>
            </select>
          </div>

          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" className="mt-1 rounded border-gray-300" defaultChecked />
            I agree to the demo Terms of Service and Privacy Policy.
          </label>

          <Button fullWidth size="lg" type="submit" className="group">
            Start Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-brand-orange-600 transition hover:text-brand-orange-700">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
