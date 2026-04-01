"use client";

import Link from "next/link";
import {
  Award,
  Bell,
  BookOpen,
  Briefcase,
  Flame,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  Sparkles,
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
};

const navItems: readonly NavItem[] = [
  { label: "Dashboard", href: "/dashboard/professional", icon: LayoutDashboard, active: true },
  { label: "My Learning", href: "/dashboard/my-learning", icon: BookOpen },
  { label: "Find Coaches", href: "/dashboard/find-coaches", icon: GraduationCap },
  { label: "Achievements", href: "/dashboard/achievements", icon: Award },
  { label: "Community", href: "/dashboard/community", icon: Users },
  { label: "Job Board", href: "/dashboard/job-board", icon: Briefcase },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
] as const;

const stats = [
  {
    label: "Courses Completed",
    value: "18",
    icon: BookOpen,
    change: "+3 this month",
    changeType: "positive" as const,
  },
  {
    label: "Learning Hours",
    value: "126",
    icon: GraduationCap,
    change: "14h this week",
    changeType: "neutral" as const,
  },
  {
    label: "Badges Earned",
    value: "24",
    icon: Award,
    change: "+2 new",
    changeType: "positive" as const,
  },
  {
    label: "Coach Sessions",
    value: "9",
    icon: Users,
    change: "2 upcoming",
    changeType: "neutral" as const,
  },
] as const;

const learningPath = {
  title: "Leadership Accelerator",
  description: "A guided path to strengthen communication, influence, and team leadership.",
  progress: 68,
  modulesCompleted: 17,
  totalModules: 25,
};

const courses = [
  {
    title: "Strategic Communication for Leaders",
    progress: 82,
    lessons: "6 of 8 lessons",
    duration: "1h 20m left",
    gradient: "from-brand-blue-700 to-brand-orange-500",
  },
  {
    title: "Managing Up with Confidence",
    progress: 54,
    lessons: "7 of 13 lessons",
    duration: "2h 10m left",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    title: "Feedback Conversations That Stick",
    progress: 31,
    lessons: "4 of 12 lessons",
    duration: "2h 45m left",
    gradient: "from-emerald-500 to-teal-500",
  },
] as const;

const sessions = [
  {
    coach: "Sarah Johnson",
    specialty: "Executive Coach",
    time: "Tomorrow, 10:00 AM",
    type: "Career Growth Session",
    status: "Confirmed",
    gradient: "from-brand-blue-600 to-brand-orange-500",
  },
  {
    coach: "Marcus Rivera",
    specialty: "Interview Coach",
    time: "Friday, 3:30 PM",
    type: "Mock Interview",
    status: "Pending",
    gradient: "from-orange-500 to-rose-500",
  },
] as const;

const achievements = [
  { emoji: "🏆", title: "Leadership Level Up", date: "Mar 29, 2026" },
  { emoji: "🔥", title: "12-Day Streak", date: "Apr 1, 2026" },
  { emoji: "🎯", title: "Goal Crusher", date: "Mar 26, 2026" },
  { emoji: "💬", title: "Community Contributor", date: "Mar 21, 2026" },
] as const;

const coaches = [
  {
    name: "Naomi Brooks",
    role: "Leadership & Promotion Coach",
    summary: "Best for professionals preparing for manager-level transitions.",
    gradient: "from-brand-orange-400 to-rose-500",
  },
  {
    name: "David Kim",
    role: "Career Strategy Coach",
    summary: "Helps align learning plans with role changes and salary growth.",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    name: "Lena Ortiz",
    role: "Communication Coach",
    summary: "Focused on executive presence, influence, and stakeholder trust.",
    gradient: "from-emerald-500 to-lime-500",
  },
] as const;

const feed = [
  {
    user: "Maya Chen",
    action: "shared a reflection from the Leadership Accelerator cohort.",
    time: "28 min ago",
    gradient: "from-brand-blue-600 to-brand-orange-500",
  },
  {
    user: "Jordan Lee",
    action: "earned the Strategic Thinking badge.",
    time: "1h ago",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    user: "Priya Nair",
    action: "posted a question about navigating a new manager role.",
    time: "3h ago",
    gradient: "from-orange-500 to-amber-500",
  },
] as const;

export default function ProfessionalDashboardPage() {
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
                Learner Hub
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
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                  item.active
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto border-t border-slate-200 px-4 py-6">
          <div className="mb-4 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white">
            <p className="text-sm font-semibold">Keep the momentum</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Join a community challenge or ask for coach support anytime.
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
                Good morning, Alex!
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <Badge variant="warning" className="gap-2 px-4 py-2 text-sm font-semibold">
                <Flame className="h-4 w-4" />
                12-day streak
              </Badge>
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900">
                <Bell className="h-5 w-5" />
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  4
                </span>
              </button>
              <Avatar name="Alex Morgan" gradient="from-brand-blue-600 to-brand-orange-500" />
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
              <div className="rounded-3xl bg-gradient-to-br from-brand-blue-800 via-brand-blue-700 to-brand-orange-500 p-6 text-white shadow-sm">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <Badge variant="warning" className="bg-white/15 text-white">
                      Current Learning Path
                    </Badge>
                    <h2 className="mt-4 text-3xl font-black">{learningPath.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-brand-blue-100">
                      {learningPath.description}
                    </p>
                  </div>
                  <Button variant="secondary" size="sm" className="bg-white text-slate-900 hover:bg-slate-100">
                    View Path
                  </Button>
                </div>

                <div className="mt-8 rounded-3xl bg-white/10 p-5 backdrop-blur-sm">
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-white">
                    <span>Progress</span>
                    <span>{learningPath.progress}% complete</span>
                  </div>
                  <ProgressBar value={learningPath.progress} color="amber" />
                  <p className="mt-3 text-sm text-brand-blue-100">
                    {learningPath.modulesCompleted} of {learningPath.totalModules} modules completed
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Continue Learning</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Pick up where you left off in your active courses.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">See all</Button>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  {courses.map((course) => (
                    <div key={course.title} className="overflow-hidden rounded-3xl border border-slate-200">
                      <div className={cn("h-32 bg-gradient-to-br", course.gradient)} />
                      <div className="p-4">
                        <h3 className="line-clamp-2 text-base font-bold text-slate-900">
                          {course.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500">{course.lessons}</p>
                        <div className="mt-4">
                          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <ProgressBar value={course.progress} color="brand" />
                        </div>
                        <p className="mt-3 text-xs font-medium text-slate-400">{course.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Upcoming Sessions</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Your next coaching touchpoints this week.
                  </p>
                </div>

                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div
                      key={`${session.coach}-${session.time}`}
                      className="flex flex-col gap-4 rounded-2xl border border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar name={session.coach} gradient={session.gradient} />
                        <div>
                          <p className="font-semibold text-slate-900">{session.coach}</p>
                          <p className="text-sm text-slate-500">{session.specialty}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-2 sm:max-w-sm sm:items-end">
                        <div className="text-sm">
                          <p className="font-semibold text-slate-900">{session.type}</p>
                          <p className="text-slate-500">{session.time}</p>
                        </div>
                        <Badge variant={session.status === "Confirmed" ? "success" : "warning"}>
                          {session.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Recommended Coaches</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Coaches aligned with your current learning path and goals.
                  </p>
                </div>

                <div className="space-y-4">
                  {coaches.map((coach) => (
                    <div
                      key={coach.name}
                      className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar name={coach.name} gradient={coach.gradient} />
                        <div>
                          <p className="font-semibold text-slate-900">{coach.name}</p>
                          <p className="text-sm text-slate-500">{coach.role}</p>
                          <p className="mt-1 max-w-xl text-sm text-slate-600">{coach.summary}</p>
                        </div>
                      </div>
                      <Button size="sm">View Profile</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Recent Achievements</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Wins worth celebrating this week.
                    </p>
                  </div>
                  <Badge variant="brand">4 new</Badge>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {achievements.map((achievement) => (
                    <div key={achievement.title} className="rounded-2xl bg-slate-50 p-4">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                        <span>{achievement.emoji}</span>
                      </div>
                      <p className="font-semibold text-slate-900">{achievement.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{achievement.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Community Activity</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      What your peers are doing right now.
                    </p>
                  </div>
                  <Sparkles className="h-5 w-5 text-brand-orange-500" />
                </div>

                <div className="space-y-4">
                  {feed.map((item) => (
                    <div key={`${item.user}-${item.time}`} className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                      <Avatar name={item.user} size="sm" gradient={item.gradient} />
                      <div>
                        <p className="text-sm leading-6 text-slate-700">
                          <span className="font-semibold text-slate-900">{item.user}</span>{" "}
                          {item.action}
                        </p>
                        <p className="mt-1 text-xs font-medium text-slate-400">{item.time}</p>
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
