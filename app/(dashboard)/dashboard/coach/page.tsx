"use client";

import { Star } from "lucide-react";
import { useSearchParams } from "next/navigation";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import MetricGrid from "@/components/dashboard/metric-grid";
import SessionList from "@/components/dashboard/session-list";
import TeamTable from "@/components/dashboard/team-table";
import DemoActionButton from "@/components/shared/demo-action-button";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";
import { COACH_DASHBOARD_DATA } from "@/lib/mock-data";

export default function CoachDashboardPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "";

  return (
    <DashboardShell
      brandLabel="Coach Hub"
      accentGradient="from-brand-blue-700 to-brand-orange-500"
      accentClassName="text-slate-400"
      helpTitle="Need a hand?"
      helpText="Reach support for scheduling and billing help."
      helpAccentClassName="text-brand-orange-200"
      dateLabel="Wednesday, April 1"
      title="Good morning, Sarah!"
      userName="Sarah Johnson"
      userRole="Executive Coach"
      alertCount={3}
      links={COACH_DASHBOARD_DATA.nav}
    >
      {tab === "" && (
        <div className="space-y-8">
          <MetricGrid metrics={COACH_DASHBOARD_DATA.metrics} />

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <SessionList
              title="Today's Sessions"
              description="A polished schedule view with realistic session states."
              sessions={COACH_DASHBOARD_DATA.sessions}
            />

            <Card className="border-brand-border">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Client Reviews</h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    Social proof that makes the coach business feel established
                  </p>
                </div>
                <Badge variant="brand">4.9 average</Badge>
              </div>

              <div className="mt-6 space-y-4">
                {COACH_DASHBOARD_DATA.reviews.map((review) => (
                  <div key={review.name} className="rounded-2xl border border-brand-border p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-brand-navy">{review.name}</p>
                      <span className="text-xs text-gray-400">{review.time}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <TeamTable
            title="Client Progress"
            description="Snapshot of current client momentum across active engagements"
            team={COACH_DASHBOARD_DATA.clients}
          />
        </div>
      )}

      {tab === "schedule" && (
        <SessionList
          title="Today's Schedule"
          description="Every booking is frontend-only, but the pacing and statuses feel real."
          sessions={COACH_DASHBOARD_DATA.sessions}
        />
      )}

      {tab === "clients" && (
        <TeamTable
          title="Client Progress"
          description="Track coaching momentum without needing live data."
          team={COACH_DASHBOARD_DATA.clients}
        />
      )}

      {tab === "courses" && (
        <div className="grid gap-6 md:grid-cols-2">
          {COACH_DASHBOARD_DATA.courses.map((course) => (
            <Card key={course} className="border-brand-border">
              <p className="text-lg font-bold text-brand-navy">{course}</p>
              <p className="mt-2 text-sm text-brand-muted">
                Sales, enrollment, and completion analytics can sit behind this view later.
              </p>
              <DemoActionButton
                idleLabel="Open Course"
                activeLabel="Preview Ready"
                variant="outline"
                activeVariant="secondary"
                className="mt-4"
              />
            </Card>
          ))}
        </div>
      )}

      {tab === "messages" && (
        <Card className="border-brand-border">
          <h3 className="text-xl font-bold text-brand-navy">Inbox</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Demo-only message list for a believable operating workflow
          </p>

          <div className="mt-6 space-y-4">
            {COACH_DASHBOARD_DATA.messages.map((message) => (
              <div key={message} className="rounded-2xl border border-brand-border p-4 text-sm text-gray-700">
                {message}
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "earnings" && (
        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Earnings Trend</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Six-month revenue momentum in a presentation-ready chart
            </p>

            <div className="mt-6 flex h-72 items-end gap-4 rounded-3xl bg-gray-50 px-6 py-8">
              {COACH_DASHBOARD_DATA.revenueData.map((item) => (
                <div key={item.month} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-full w-full items-end">
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-brand-blue-700 to-brand-orange-400"
                      style={{ height: `${item.value}%` }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">{item.month}</p>
                    <p className="text-xs text-gray-400">${item.value * 100}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Revenue Highlights</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Quick signals investors can scan in seconds
            </p>

            <div className="mt-6 space-y-4">
              {COACH_DASHBOARD_DATA.earningsHighlights.map((item) => (
                <div key={item} className="rounded-2xl bg-gray-50 p-4 text-sm font-medium text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {tab === "analytics" && <MetricGrid metrics={COACH_DASHBOARD_DATA.metrics} />}

      {tab === "profile" && (
        <div className="grid gap-4 md:grid-cols-2">
          {COACH_DASHBOARD_DATA.profile.map((item) => (
            <Card key={item} className="border-brand-border p-4">
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      )}

      {tab === "settings" && (
        <div className="grid gap-4 md:grid-cols-2">
          {COACH_DASHBOARD_DATA.settings.map((item) => (
            <Card key={item} className="border-brand-border p-4">
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
