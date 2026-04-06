"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Star,
  Clock,
  Video,
  ChevronDown,
  Heart,
  Award,
  Sparkles
} from "lucide-react";
import FadeIn from "@/components/shared/fade-in";
import { COACH_CATEGORIES } from "@/lib/constants";
import { MOCK_COACHES } from "@/lib/mock-data";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);

  const toggleSave = (id: string) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28">
      <section className="border-b border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
              Find Your Perfect <span className="gradient-text">Coach</span>
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Browse vetted experts across leadership, career growth, communication, and more.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-6 flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  placeholder="Search by name, specialty, or keyword..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-brand-blue-500 focus:bg-white focus:ring-2 focus:ring-brand-blue-500"
                />
              </div>
              <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700">
                <Filter className="h-4 w-4" />
                Filters
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue-700 to-brand-orange-500 px-5 py-3.5 text-sm font-medium text-white shadow-lg shadow-brand-blue-200">
                <Sparkles className="h-4 w-4" />
                AI Match
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-4 flex flex-wrap gap-2">
              {COACH_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === cat
                      ? "bg-brand-orange-500 text-white shadow-md shadow-brand-orange-200"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-900">{MOCK_COACHES.length}</span> coaches
          </p>
          <select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none">
            <option>Sort by: Recommended</option>
            <option>Highest Rated</option>
            <option>Most Sessions</option>
            <option>Price: Low to High</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_COACHES.map((coach, i) => (
            <FadeIn key={coach.id} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`relative h-24 bg-gradient-to-r ${coach.gradient}`}>
                  {coach.topRated && (
                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-xs font-bold text-yellow-900">
                      <Award className="h-3 w-3" />
                      Top Rated
                    </div>
                  )}
                  <button
                    onClick={() => toggleSave(coach.id)}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        saved.includes(coach.id)
                          ? "fill-red-500 text-red-500"
                          : "text-white"
                      }`}
                    />
                  </button>
                  <div className="absolute -bottom-8 left-6">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${coach.gradient} text-xl font-bold text-white ring-4 ring-white shadow-lg`}
                    >
                      {coach.avatar}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-12">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{coach.name}</h3>
                      <p className="text-sm text-gray-500">{coach.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">${coach.hourlyRate}</p>
                      <p className="text-xs text-gray-400">/session</p>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">{coach.bio}</p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-900">{coach.rating}</span>
                      ({coach.reviews})
                    </span>
                    <span className="flex items-center gap-1">
                      <Video className="h-3.5 w-3.5" />
                      {coach.sessions}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {coach.experience}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {coach.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-brand-blue-50 px-2.5 py-1 text-xs font-medium text-brand-blue-700"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1.5">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          coach.available ? "bg-emerald-500" : "bg-gray-300"
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          coach.available ? "text-emerald-600" : "text-gray-400"
                        }`}
                      >
                        {coach.available ? "Available now" : "Waitlist"}
                      </span>
                    </div>
                    <Link
                      href={`/marketplace/${coach.id}`}
                      className="text-sm font-semibold text-brand-orange-600 transition hover:text-brand-orange-700"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
