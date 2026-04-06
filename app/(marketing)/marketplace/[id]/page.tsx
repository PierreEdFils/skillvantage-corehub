import Link from "next/link";
import { notFound } from "next/navigation";
import { Award, Clock, MapPin, Star, Video } from "lucide-react";
import Button from "@/components/ui/button";
import { MOCK_COACHES } from "@/lib/mock-data";

export default async function CoachProfilePage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const coach = MOCK_COACHES.find((item) => item.id === id);

  if (!coach) notFound();

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/marketplace" className="text-sm font-medium text-brand-orange-600 transition hover:text-brand-orange-700">
            ← Back to marketplace
          </Link>

          <div className="mt-6 grid gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-xl md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className={`mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${coach.gradient} text-2xl font-bold text-white shadow-lg`}>
                {coach.avatar}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-extrabold text-gray-900">{coach.name}</h1>
                {coach.topRated ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold text-yellow-800">
                    <Award className="h-3.5 w-3.5" />
                    Top Rated
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-lg text-gray-600">{coach.title}</p>
              <p className="mt-6 text-base leading-7 text-gray-600">{coach.bio}</p>

              <div className="mt-8 flex flex-wrap gap-2">
                {coach.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-brand-blue-50 px-3 py-1.5 text-sm font-medium text-brand-blue-700"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Session rate</p>
                  <p className="text-4xl font-extrabold text-gray-900">${coach.hourlyRate}</p>
                </div>
                <p className={`text-sm font-semibold ${coach.available ? "text-emerald-600" : "text-gray-400"}`}>
                  {coach.available ? "Available now" : "Waitlist"}
                </p>
              </div>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{coach.rating} rating across {coach.reviews} reviews</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="h-4 w-4" />
                  <span>{coach.sessions} sessions completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4" />
                  <span>{coach.experience} experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  <span>{coach.location}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Link href={`/demo?coach=${encodeURIComponent(coach.name)}`} className="block">
                  <Button fullWidth size="lg">Book Intro Session</Button>
                </Link>
                <Link
                  href="/signup?source=coach-profile"
                  className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Create Account to Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
