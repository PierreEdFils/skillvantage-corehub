"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100">
          <Mail className="h-6 w-6 text-brand-blue-700" />
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900">Reset password</h1>
        <p className="mt-2 text-sm text-gray-500">Demo recovery screen</p>
      </div>

      <form className="space-y-4">
        <Input label="Email address" type="email" placeholder="you@example.com" />
        <Button fullWidth size="lg" type="submit">Send reset link</Button>
      </form>

      <Link
        href="/login"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-orange-600 transition hover:text-brand-orange-700"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Link>
    </div>
  );
}
