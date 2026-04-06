import Link from "next/link";

export default function PlaceholderPage({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
            {eyebrow}
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900">{title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            {description}
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
              className="rounded-full border border-gray-200 px-8 py-4 text-lg font-medium text-gray-700 transition hover:bg-white"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
