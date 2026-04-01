"use client";

import Link from "next/link";
import {
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  CreditCard,
  FileText,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Settings,
  TriangleAlert,
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
  { label: "Dashboard", href: "/dashboard/employer", icon: LayoutDashboard, active: true },
  { label: "Team", href: "/dashboard/team", icon: Users },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { label: "Learning Paths", href: "/dashboard/learning-paths", icon: BookOpen },
  { label: "Reports", href: "/dashboard/reports", icon: FileText },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
] as const;

const stats = [
  {
    label: "Team Members",
    value: "248",
    icon: Users,
    change: "+18 this quarter",
    changeType: "positive" as const,
  },
  {
    label: "Training ROI",
    value: "340%",
    icon: BarChart3,
    change: "+42% YoY",
    changeType: "positive" as const,
  },
  {
    label: "Courses Assigned",
    value: "45",
    icon: BookOpen,
    change: "7 launched this month",
    changeType: "neutral" as const,
  },
  {
    label: "Completion Rate",
    value: "87%",
    icon: Building2,
    change: "+6 pts",
    changeType: "positive" as const,
  },
] as const;

const skillCoverage = [
  { skill: "Leadership", value: 82, color: "brand" as const },
  { skill: "Data Literacy", value: 74, color: "blue" as const },
  { skill: "Project Management", value: 69, color: "emerald" as const },
  { skill: "AI Fluency", value: 41, color: "amber" as const },
] as const;

const teamActivity = [
  {
    name: "Alicia Gomez",
    department: "Product",
    progress: 91,
    status: "On Track",
    lastActive: "32 min ago",
    gradient: "from-brand-blue-600 to-brand-orange-500",
  },
  {
    name: "Ben Carter",
    department: "Sales",
    progress: 56,
    status: "Needs Support",
    lastActive: "Yesterday",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    name: "Priya Nair",
    department: "Operations",
    progress: 78,
    status: "On Track",
    lastActive: "2h ago",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Marcus Lee",
    department: "Engineering",
    progress: 34,
    status: "At Risk",
    lastActive: "3 days ago",
    gradient: "from-orange-500 to-rose-500",
  },
] as const;

const assignments = [
  {
    title: "Manager Readiness Path",
    audience: "34 team leads",
    completion: 79,
    due: "Due Apr 12",
  },
  {
    title: "AI Productivity Foundations",
    audience: "92 employees",
    completion: 51,
    due: "Due Apr 18",
  },
  {
    title: "Customer Communication Excellence",
    audience: "48 client-facing roles",
    completion: 88,
    due: "Due Apr 8",
  },
] as const;

const departmentData = [
  { department: "Product", value: 88 },
  { department: "Sales", value: 63 },
  { department: "Engineering", value: 72 },
  { department: "Operations", value: 81 },
  { department: "People", value: 76 },
] as const;

const completions = [
  {
    name: "Jordan Lee",
    detail: "completed AI Productivity Foundations",
    time: "14 min ago",
    gradient: "from-brand-blue-600 to-brand-orange-500",
  },
  {
    name: "Elena Torres",
    detail: "finished Manager Readiness Path",
    time: "1h ago",
    gradient: "from-sky-500 to-blue-500",
  },
  {
    name: "Maya Patel",
    detail: "earned the Leadership Momentum badge",
    time: "3h ago",
    gradient: "from-emerald-500 to-teal-500",
  },
] as const;

export default function EmployerDashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 text-lg font-black text-white">
              SV
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-900">SkillVantage</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Employer Hub
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
                    ? "bg-slate-100 text-slate-900"
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
            <p className="text-sm font-semibold">Need reporting help?</p>
            <p className="mt-1 text-xs leading-5 text-slate-300">
              Export adoption and completion insights for your leadership team.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-200">
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
              <p className="text-sm font-medium text-slate-500">Enterprise Dashboard</p>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">
                Northstar Health Systems
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900">
                <Bell className="h-5 w-5" />
                <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
                  6
                </span>
              </button>
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                <Avatar name="Dana Walsh" gradient="from-slate-700 to-slate-500" />
                <div className="pr-2">
                  <p className="text-sm font-semibold text-slate-900">Dana Walsh</p>
                  <p className="text-xs text-slate-500">HR Admin</p>
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

          <section className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <TriangleAlert className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                    AI Insight
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-red-900">
                    12 team members at risk of leaving
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-red-800">
                    Engagement patterns, stalled learning activity, and manager feedback suggest a
                    retention risk spike in Sales and Engineering. Prioritize outreach this week.
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="sm">Review At-Risk Team</Button>
            </div>
          </section>

          <section className="mt-8 grid gap-8 xl:grid-cols-3">
            <div className="space-y-8 xl:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Skill Coverage</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Capability strength across your most important workforce skills.
                  </p>
                </div>

                <div className="space-y-5">
                  {skillCoverage.map((item) => (
                    <div key={item.skill}>
                      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>{item.skill}</span>
                        <span>{item.value}% covered</span>
                      </div>
                      <ProgressBar value={item.value} color={item.color} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Team Activity</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Current learning engagement across departments.
                    </p>
                  </div>
                  <Button variant="outline" size="sm">Export</Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-200 text-xs uppercase tracking-[0.18em] text-slate-400">
                        <th className="pb-3 font-semibold">Name</th>
                        <th className="pb-3 font-semibold">Department</th>
                        <th className="pb-3 font-semibold">Progress</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold">Last Active</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamActivity.map((member) => (
                        <tr key={member.name} className="border-b border-slate-100 last:border-b-0">
                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-3">
                              <Avatar name={member.name} size="sm" gradient={member.gradient} />
                              <span className="font-semibold text-slate-900">{member.name}</span>
                            </div>
                          </td>
                          <td className="py-4 pr-4 text-sm text-slate-600">{member.department}</td>
                          <td className="py-4 pr-4">
                            <div className="w-36">
                              <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                                <span>{member.progress}%</span>
                              </div>
                              <ProgressBar
                                value={member.progress}
                                color={
                                  member.progress >= 80
                                    ? "emerald"
                                    : member.progress >= 55
                                    ? "blue"
                                    : "amber"
                                }
                              />
                            </div>
                          </td>
                          <td className="py-4 pr-4">
                            <Badge
                              variant={
                                member.status === "On Track"
                                  ? "success"
                                  : member.status === "Needs Support"
                                  ? "warning"
                                  : "danger"
                              }
                            >
                              {member.status}
                            </Badge>
                          </td>
                          <td className="py-4 text-sm text-slate-500">{member.lastActive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Learning Path Assignments</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Active rollouts currently assigned across the organization.
                  </p>
                </div>

                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.title} className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold text-slate-900">{assignment.title}</p>
                          <p className="text-sm text-slate-500">{assignment.audience}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="info">{assignment.due}</Badge>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                          <span>Completion</span>
                          <span>{assignment.completion}%</span>
                        </div>
                        <ProgressBar value={assignment.completion} color="brand" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">Department Breakdown</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Completion performance by department.
                    </p>
                  </div>
                  <Badge variant="brand">Updated today</Badge>
                </div>

                <div className="space-y-4">
                  {departmentData.map((item) => (
                    <div key={item.department}>
                      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-700">
                        <span>{item.department}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-100">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-sky-500"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-xl font-black text-slate-900">Recent Completions</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Latest wins from across your organization.
                  </p>
                </div>

                <div className="space-y-4">
                  {completions.map((item) => (
                    <div key={`${item.name}-${item.time}`} className="flex gap-3 rounded-2xl border border-slate-200 p-4">
                      <Avatar name={item.name} size="sm" gradient={item.gradient} />
                      <div>
                        <p className="text-sm leading-6 text-slate-700">
                          <span className="font-semibold text-slate-900">{item.name}</span>{" "}
                          {item.detail}
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
