import FadeIn from "@/components/shared/fade-in";
import PersonaShowcase from "@/components/marketing/persona-showcase";

export default function CoachingProductsPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
              Coaching Products
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Explore the <span className="gradient-text">CoreHub Ecosystem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
              Coaching, learning, and workforce tools built for coaches,
              professionals, and employers in one connected platform.
            </p>
          </FadeIn>
        </div>
      </section>

      <PersonaShowcase />
    </main>
  );
}
