"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useSearchParams } from "next/navigation";
import AchievementList from "@/components/dashboard/achievement-list";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import LearningPathList from "@/components/dashboard/learning-path-list";
import MetricGrid from "@/components/dashboard/metric-grid";
import SessionList from "@/components/dashboard/session-list";
import DemoActionButton from "@/components/shared/demo-action-button";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { PROFESSIONAL_DASHBOARD_DATA } from "@/lib/mock-data";

export default function ProfessionalDashboardPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "";

  return (
    <DashboardShell
      brandLabel="Learner Hub"
      accentGradient="from-brand-blue-700 to-brand-orange-500"
      accentClassName="text-slate-400"
      helpTitle="Keep the momentum"
      helpText="Join a community challenge or ask for coach support anytime."
      helpAccentClassName="text-brand-orange-200"
      dateLabel="Wednesday, April 1"
      title="Good morning, Alex!"
      userName="Alex Morgan"
      userRole="Professional"
      alertCount={4}
      links={PROFESSIONAL_DASHBOARD_DATA.nav}
    >
      {tab === "" && (
        <div className="space-y-8">
          <MetricGrid metrics={PROFESSIONAL_DASHBOARD_DATA.metrics} />

          <div className="grid gap-6 xl:grid-cols-[1.25fr_0.95fr]">
            <LearningPathList paths={PROFESSIONAL_DASHBOARD_DATA.learningPaths} />
            <AchievementList achievements={PROFESSIONAL_DASHBOARD_DATA.achievements} />
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
            <SessionList
              title="Upcoming Coaching"
              description="Upcoming sessions that make the professional journey feel active."
              sessions={PROFESSIONAL_DASHBOARD_DATA.sessions}
            />

            <Card className="border-brand-border">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Community Activity</h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    Social proof and momentum across the platform
                  </p>
                </div>
                <Sparkles className="h-5 w-5 text-brand-orange-500" />
              </div>

              <div className="mt-6 space-y-4">
                {PROFESSIONAL_DASHBOARD_DATA.feed.map((item) => (
                  <div key={`${item.user}-${item.time}`} className="rounded-2xl border border-brand-border p-4">
                    <p className="text-sm leading-6 text-gray-700">
                      <span className="font-semibold text-brand-navy">{item.user}</span>{" "}
                      {item.action}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-400">{item.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === "learning" && (
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <LearningPathList
            title="Learning Queue"
            description="Active tracks, progress, and next milestones."
            paths={PROFESSIONAL_DASHBOARD_DATA.learningPaths}
          />

          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Weekly Plan</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Clear next actions for a believable growth workflow
            </p>

            <div className="mt-6 space-y-4">
              {PROFESSIONAL_DASHBOARD_DATA.weeklyPlan.map((item, index) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-brand-blue-50 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange-500 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {tab === "coaches" && (
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Recommended Coaches</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Smart matching powered by static demo data
            </p>

            <div className="mt-6 space-y-4">
              {PROFESSIONAL_DASHBOARD_DATA.coaches.map((coach) => (
                <div
                  key={coach.name}
                  className="flex flex-col gap-4 rounded-2xl border border-brand-border p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="font-semibold text-brand-navy">{coach.name}</p>
                    <p className="text-sm text-brand-muted">{coach.role}</p>
                    <p className="mt-1 text-sm text-gray-600">{coach.summary}</p>
                  </div>
                  <div className="flex gap-3">
                    <DemoActionButton
                      idleLabel="Book Session"
                      activeLabel="Session Requested"
                    />
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/marketplace">View Marketplace</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <SessionList
            title="Upcoming Sessions"
            description="Booked touchpoints and pending support"
            sessions={PROFESSIONAL_DASHBOARD_DATA.sessions}
          />
        </div>
      )}

      {tab === "achievements" && (
        <AchievementList
          title="Achievement Gallery"
          description="Milestones that make progress feel tangible for investors and users."
          achievements={PROFESSIONAL_DASHBOARD_DATA.achievements}
        />
      )}

      {tab === "community" && (
        <Card className="border-brand-border">
          <h3 className="text-xl font-bold text-brand-navy">Community Feed</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Lightweight social layer powered entirely by mock activity
          </p>

          <div className="mt-6 space-y-4">
            {PROFESSIONAL_DASHBOARD_DATA.feed.map((item) => (
              <div key={`${item.user}-${item.time}`} className="rounded-2xl border border-brand-border p-4">
                <p className="text-sm leading-6 text-gray-700">
                  <span className="font-semibold text-brand-navy">{item.user}</span>{" "}
                  {item.action}
                </p>
                <p className="mt-2 text-xs font-medium text-gray-400">{item.time}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "jobs" && (
        <div className="grid gap-6 lg:grid-cols-2">
          {PROFESSIONAL_DASHBOARD_DATA.jobs.map((job) => (
            <Card key={job} className="border-brand-border">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold text-brand-navy">{job}</p>
                  <p className="mt-2 text-sm text-brand-muted">
                    Matched to the skills and goals already shown in the dashboard.
                  </p>
                </div>
                <Badge variant="info">Recommended</Badge>
              </div>
              <DemoActionButton
                idleLabel="Save Opportunity"
                activeLabel="Saved"
                variant="outline"
                activeVariant="secondary"
                className="mt-4"
              />
            </Card>
          ))}
        </div>
      )}

      {tab === "settings" && (
        <div className="grid gap-4 md:grid-cols-2">
          {PROFESSIONAL_DASHBOARD_DATA.settings.map((item) => (
            <Card key={item} className="border-brand-border p-4">
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
