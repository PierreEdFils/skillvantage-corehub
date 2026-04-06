"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const role = event.currentTarget.getAttribute("data-role") || "professional";
    router.push(`/dashboard/${role}`);
  }

  return (
    <div className="grid w-full max-w-6xl gap-10 lg:grid-cols-2">
      <div className="hidden flex-col justify-center lg:flex">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
          <Sparkles className="h-4 w-4" />
          Demo Access
        </div>
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Log in and explore
          <br />
          the full experience.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
          This frontend-only flow routes investors through polished professional,
          coach, and employer dashboards using realistic static data.
        </p>
      </div>

      <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-700">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Log in</h2>
          <p className="mt-2 text-sm text-gray-500">Demo-only product access</p>
        </div>

        <form
          className="space-y-4"
          data-role="professional"
          onSubmit={handleSubmit}
        >
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              Enter demo as
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

          <Button fullWidth size="lg" type="submit" className="group">
            Enter Demo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>

        <div className="mt-6 flex items-center justify-between gap-4 text-sm">
          <Link href="/forgot-password" className="text-gray-500 transition hover:text-gray-900">
            Forgot password?
          </Link>
          <Link href="/signup" className="font-semibold text-brand-orange-600 transition hover:text-brand-orange-700">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
