"use client";

import Link from "next/link";
import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  DollarSign,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Settings,
  Star,
  UserCircle2,
  Users,
} from "lucide-react";
import Avatar from "@/components/ui/avatar";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import ProgressBar from "@/components/ui/progress-bar";
import StatCard from "@/components/ui/stat-card";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  active?: boolean;
  badge?: string;
};

const navItems: readonly NavItem[] = [
  { label: "Dashboard", href: "/dashboard/coach", icon: LayoutDashboard, active: true },
  { label: "Schedule", href: "/dashboard/schedule", icon: CalendarDays },
  { label: "Clients", href: "/dashboard/clients", icon: Users },
  { label: "Courses", href: "/dashboard/courses", icon: BookOpen },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare, badge: "12" },
  { label: "Earnings", href: "/dashboard/earnings", icon: DollarSign },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Profile", href: "/dashboard/profile", icon: UserCircle2 },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
] as const;

const stats = [
  {
    label: "Monthly Revenue",
    value: "$8,420",
    icon: DollarSign,
    change: "+12.8%",
    changeType: "positive" as const,
  },
  {
    label: "Active Clients",
    value: "47",
    icon: Users,
    change: "+6 this week",
    changeType: "positive" as const,
  },
  {
    label: "Sessions",
    value: "32",
    icon: CalendarDays,
    change: "8 today",
    changeType: "neutral" as const,
  },
  {
    label: "Rating",
    value: "4.9",
    icon: Star,
    change: "Top 5%",
    changeType: "positive" as const,
  },
] as const;

const sessions = [
  {
    client: "Maya Patel",
    time: "9:00 AM",
    type: "Career Strategy",
    status: "Confirmed",
    badge: "success" as const,
    gradient: "from-brand-orange-400 to-rose-500",
  },
  {
    client: "Jordan Lee",
    time: "11:30 AM",
    type: "Leadership Coaching",
    status: "Rescheduled",
    badge: "warning" as const,
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    client: "Avery Johnson",
    time: "2:00 PM",
    type: "Resume Review",
    status: "Confirmed",
    badge: "success" as const,
    gradient: "from-brand-blue-600 to-brand-orange-500",
  },
  {
    client: "Priya Nair",
    time: "4:15 PM",
    type: "Mock Interview",
    status: "Pending",
    badge: "info" as const,
    gradient: "from-emerald-500 to-teal-500",
  },
] as const;

const clientProgress = [
  { name: "Maya Patel", progress: 84, sessions: 12, lastActive: "2h ago", color: "brand" as const },
  { name: "Jordan Lee", progress: 67, sessions: 9, lastActive: "Yesterday", color: "blue" as const },
  { name: "Avery Johnson", progress: 91, sessions: 14, lastActive: "4h ago", color: "emerald" as const },
  { name: "Priya Nair", progress: 52, sessions: 6, lastActive: "Today", color: "amber" as const },
] as const;

const revenueData = [
  { month: "Jan", value: 58 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 64 },
  { month: "Apr", value: 88 },
  { month: "May", value: 76 },
  { month: "Jun", value: 94 },
] as const;

const reviews = [
  {
    name: "Elena Torres",
    rating: 5,
    text: "Sarah helped me tighten my story, improve my interview confidence, and land a role in under six weeks.",
    time: "2 days ago",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    name: "Marcus Chen",
    rating: 5,
    text: "Every session feels practical and focused. I always leave with a clear plan and measurable next steps.",
    time: "5 days ago",
    gradient: "from-brand-blue-500 to-brand-blue-700",
  },
] as const;

const badgeStyles = {
  success: "success",
  warning: "warning",
  info: "info",
} as const;

export default function CoachDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-700 to-brand-orange-500 text-lg font-black text-white">
              SV
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-900">SkillVantage</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Coach Hub
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                  item.active
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />
                  {item.label}
                </span>
                {item.badge ? <Badge variant="brand">{item.badge}</Badge> : null}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-slate-200 px-4 py-6">
          <div className="mb-4 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white">
            <p className="text-sm font-semibold">Need a hand?</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Reach support for scheduling and billing help.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange-200">
              <LifeBuoy className="h-4 w-4" />
              Help Center
            </button>
          </div>

          <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      <div className="ml-64 min-h-screen">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
          <div className="flex items-center justify-between px-8 py-6">
            <div>
              <p className="text-sm font-medium text-slate-500">Wednesday, April 1</p>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                Good morning, Sarah!
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900">
                <Bell className="h-5 w-5" />
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Avatar name="Sarah Johnson" gradient="from-brand-blue-600 to-brand-orange-500" />
                <div className="pr-2">
                  <p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-xs text-slate-500">Executive Coach</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="px-8 py-8">
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
                changeType={stat.changeType}
              />
            ))}
          </section>

          <section className="mt-8 grid gap-8 xl:grid-cols-3">
            <div className="space-y-8 xl:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Upcoming Sessions</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Your next coaching sessions for today.
                    </p>
                  </div>
                  <Button size="sm">New Session</Button>
                </div>

                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div
                      key={`${session.client}-${session.time}`}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar
                          name={session.client}
                          gradient={session.gradient}
                          className="shadow-sm"
                        />
                        <div>
                          <p className="font-semibold text-slate-900">{session.client}</p>
                          <p className="text-sm text-slate-500">{session.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-semibold text-slate-900">{session.time}</p>
                          <p className="text-sm text-slate-500">45 min</p>
                        </div>
                        <Badge variant={badgeStyles[session.badge]}>{session.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Revenue</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Earnings trend over the last 6 months.
                    </p>
                  </div>
                  <Badge variant="success">+18% growth</Badge>
                </div>

                <div className="flex h-72 items-end gap-4 rounded-3xl bg-slate-50 px-6 py-8">
                  {revenueData.map((item) => (
                    <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                      <div className="flex h-full w-full items-end">
                        <div
                          className="w-full rounded-t-2xl bg-gradient-to-t from-brand-blue-700 to-brand-orange-400"
                          style={{ height: `${item.value}%` }}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-semibold text-slate-700">{item.month}</p>
                        <p className="text-xs text-slate-400">${item.value * 100}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Client Progress</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Track momentum across your active clients.
                  </p>
                </div>

                <div className="space-y-5">
                  {clientProgress.map((client) => (
                    <div key={client.name} className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <Avatar name={client.name} size="sm" />
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{client.name}</p>
                            <p className="text-xs text-slate-500">
                              {client.sessions} sessions
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-slate-400">
                          {client.lastActive}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span>Progress</span>
                          <span>{client.progress}%</span>
                        </div>
                        <ProgressBar value={client.progress} color={client.color} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Recent Reviews</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Latest feedback from your clients.
                    </p>
                  </div>
                  <Badge variant="brand">4.9 average</Badge>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.name} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-start gap-3">
                        <Avatar name={review.name} size="sm" gradient={review.gradient} />
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                            <span className="text-xs text-slate-400">{review.time}</span>
                          </div>
                          <div className="mt-2 flex items-center gap-1 text-amber-400">
                            {Array.from({ length: review.rating }).map((_, index) => (
                              <Star key={index} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{review.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
