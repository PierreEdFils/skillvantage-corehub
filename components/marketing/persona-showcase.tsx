"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, CheckCircle2, GraduationCap } from "lucide-react";

export default function PersonaShowcase() {
  const [activePersona, setActivePersona] = useState<
    "coach" | "professional" | "employer"
  >("coach");

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            One Platform, <span className="gradient-text">Three Superpowers</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Whether you coach, learn, or hire — SkillVantage is built for you.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {[
            { id: "coach" as const, label: "For Coaches", icon: BookOpen },
            { id: "professional" as const, label: "For Professionals", icon: GraduationCap },
            { id: "employer" as const, label: "For Employers", icon: Briefcase }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActivePersona(tab.id)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                activePersona === tab.id
                  ? "bg-brand-orange-500 text-white shadow-lg shadow-brand-orange-200"
                  : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activePersona}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activePersona === "coach" && (
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  Grow Your Coaching Business
                </h3>
                <p className="mb-8 text-lg text-gray-600">
                  Reach thousands of professionals, manage your schedule, build
                  courses, and earn more — all from one beautiful dashboard.
                </p>
                <div className="space-y-4">
                  {[
                    "Build & sell courses and group programs",
                    "Smart scheduling with calendar sync",
                    "Automated client progress tracking",
                    "Built-in payments",
                    "Marketing tools & client acquisition",
                    "Analytics to grow your revenue"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Coach Dashboard</h4>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Revenue", value: "$8,420" },
                    { label: "Clients", value: "47" },
                    { label: "Sessions", value: "6" },
                    { label: "Rating", value: "4.9 ⭐" }
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-brand-blue-50 p-4">
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activePersona === "professional" && (
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  Accelerate Your Career
                </h3>
                <p className="mb-8 text-lg text-gray-600">
                  Get matched with world-class coaches, learn in-demand skills,
                  earn credentials, and unlock new career opportunities.
                </p>
                <div className="space-y-4">
                  {[
                    "AI-powered coach matching",
                    "Personalized learning paths",
                    "Certificates and badges",
                    "1:1 and group sessions",
                    "Peer community",
                    "Job opportunities"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Learning Dashboard</h4>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700">
                    🔥 12-day streak
                  </span>
                </div>
                <div className="rounded-xl bg-gradient-to-r from-brand-blue-700 to-brand-orange-500 p-4 text-white">
                  <p className="text-sm opacity-80">Current Path</p>
                  <p className="mt-1 text-lg font-bold">Leadership &amp; Management</p>
                  <div className="mt-3 h-2 rounded-full bg-white/20">
                    <div className="h-2 w-[68%] rounded-full bg-white" />
                  </div>
                  <p className="mt-2 text-xs opacity-80">68% complete</p>
                </div>
              </div>
            </div>
          )}

          {activePersona === "employer" && (
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-3xl font-bold text-gray-900">
                  Build an Unstoppable Workforce
                </h3>
                <p className="mb-8 text-lg text-gray-600">
                  Identify skill gaps, assign learning paths, track ROI, and
                  reduce turnover with data-driven talent development.
                </p>
                <div className="space-y-4">
                  {[
                    "Skill gap analysis",
                    "Learning path assignment",
                    "Team reporting",
                    "Bulk seat management",
                    "ROI dashboards",
                    "Dedicated customer success"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="font-bold text-gray-900">Employer Dashboard</h4>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700">
                    Enterprise
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-xs text-gray-500">Team Members</p>
                    <p className="text-2xl font-bold text-gray-900">248</p>
                  </div>
                  <div className="rounded-xl bg-blue-50 p-4">
                    <p className="text-xs text-gray-500">Training ROI</p>
                    <p className="text-2xl font-bold text-gray-900">340%</p>
                  </div>
                  <div className="rounded-xl bg-brand-blue-50 p-4">
                    <p className="text-xs text-gray-500">Completion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">87%</p>
                  </div>
                  <div className="rounded-xl bg-orange-50 p-4">
                    <p className="text-xs text-gray-500">Attrition</p>
                    <p className="text-2xl font-bold text-gray-900">-34%</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
