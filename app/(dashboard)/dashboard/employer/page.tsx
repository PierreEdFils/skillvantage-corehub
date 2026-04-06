"use client";

import { useSearchParams } from "next/navigation";
import DashboardShell from "@/components/dashboard/dashboard-shell";
import MetricGrid from "@/components/dashboard/metric-grid";
import TeamTable from "@/components/dashboard/team-table";
import DemoActionButton from "@/components/shared/demo-action-button";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import { EMPLOYER_DASHBOARD_DATA } from "@/lib/mock-data";

export default function EmployerDashboardPage() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "";
  const AlertIcon = EMPLOYER_DASHBOARD_DATA.aiInsight.icon;

  return (
    <DashboardShell
      brandLabel="Employer Hub"
      accentGradient="from-slate-900 to-slate-700"
      accentClassName="text-slate-400"
      helpTitle="Need reporting help?"
      helpText="Export adoption and completion insights for your leadership team."
      helpAccentClassName="text-sky-200"
      dateLabel="Enterprise Dashboard"
      title="Northstar Health Systems"
      userName="Dana Walsh"
      userRole="HR Admin"
      alertCount={6}
      links={EMPLOYER_DASHBOARD_DATA.nav}
    >
      {tab === "" && (
        <div className="space-y-8">
          <MetricGrid metrics={EMPLOYER_DASHBOARD_DATA.metrics} />

          <Card className="border-red-200 bg-red-50">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <AlertIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                    AI Insight
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-red-900">
                    {EMPLOYER_DASHBOARD_DATA.aiInsight.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-red-800">
                    {EMPLOYER_DASHBOARD_DATA.aiInsight.description}
                  </p>
                </div>
              </div>
              <Button variant="secondary" size="sm">
                Review At-Risk Team
              </Button>
            </div>
          </Card>

          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-brand-border">
              <h3 className="text-xl font-bold text-brand-navy">Skill Coverage</h3>
              <p className="mt-2 text-sm text-brand-muted">
                Capability strength across the most important workforce skills
              </p>

              <div className="mt-6 space-y-5">
                {EMPLOYER_DASHBOARD_DATA.skillCoverage.map((item) => (
                  <div key={item.skill}>
                    <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-700">
                      <span>{item.skill}</span>
                      <span>{item.value}% covered</span>
                    </div>
                    <ProgressBar value={item.value} color={item.color} />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-brand-border">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-brand-navy">Recent Completions</h3>
                  <p className="mt-2 text-sm text-brand-muted">
                    Latest wins from across the organization
                  </p>
                </div>
                <Badge variant="info">Live Demo</Badge>
              </div>

              <div className="mt-6 space-y-4">
                {EMPLOYER_DASHBOARD_DATA.completions.map((item) => (
                  <div key={`${item.name}-${item.time}`} className="rounded-2xl border border-brand-border p-4">
                    <p className="text-sm leading-6 text-gray-700">
                      <span className="font-semibold text-brand-navy">{item.name}</span>{" "}
                      {item.detail}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gray-400">{item.time}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <TeamTable
              title="Team Activity"
              description="Current learning engagement across departments"
              team={EMPLOYER_DASHBOARD_DATA.team}
            />

            <Card className="border-brand-border">
              <h3 className="text-xl font-bold text-brand-navy">Learning Path Assignments</h3>
              <p className="mt-2 text-sm text-brand-muted">
                Active rollouts currently assigned across the organization
              </p>

              <div className="mt-6 space-y-4">
                {EMPLOYER_DASHBOARD_DATA.assignments.map((assignment) => (
                  <div key={assignment.title} className="rounded-2xl border border-brand-border p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-brand-navy">{assignment.title}</p>
                        <p className="text-sm text-brand-muted">{assignment.audience}</p>
                      </div>
                      <Badge variant="info">{assignment.due}</Badge>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-500">
                        <span>Completion</span>
                        <span>{assignment.completion}%</span>
                      </div>
                      <ProgressBar value={assignment.completion} color="brand" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === "team" && (
        <TeamTable
          title="Team Activity"
          description="A clean table view for managers and HR admins."
          team={EMPLOYER_DASHBOARD_DATA.team}
        />
      )}

      {tab === "analytics" && (
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Department Breakdown</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Completion performance by department
            </p>

            <div className="mt-6 space-y-4">
              {EMPLOYER_DASHBOARD_DATA.departmentData.map((item) => (
                <div key={item.department}>
                  <div className="mb-2 flex items-center justify-between text-sm font-semibold text-gray-700">
                    <span>{item.department}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-slate-900 via-slate-700 to-sky-500"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="border-brand-border">
            <h3 className="text-xl font-bold text-brand-navy">Recent Completions</h3>
            <p className="mt-2 text-sm text-brand-muted">
              Frontend-only activity feed for the employer experience
            </p>

            <div className="mt-6 space-y-4">
              {EMPLOYER_DASHBOARD_DATA.completions.map((item) => (
                <div key={`${item.name}-${item.time}`} className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm leading-6 text-gray-700">
                    <span className="font-semibold text-brand-navy">{item.name}</span>{" "}
                    {item.detail}
                  </p>
                  <p className="mt-2 text-xs font-medium text-gray-400">{item.time}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {tab === "learning-paths" && (
        <div className="grid gap-6 lg:grid-cols-3">
          {EMPLOYER_DASHBOARD_DATA.assignments.map((assignment) => (
            <Card key={assignment.title} className="border-brand-border">
              <p className="font-semibold text-brand-navy">{assignment.title}</p>
              <p className="mt-1 text-sm text-brand-muted">{assignment.audience}</p>
              <div className="mt-4">
                <ProgressBar value={assignment.completion} color="brand" />
              </div>
              <Badge variant="info" className="mt-4">
                {assignment.due}
              </Badge>
            </Card>
          ))}
        </div>
      )}

      {tab === "reports" && (
        <div className="grid gap-6 md:grid-cols-2">
          {EMPLOYER_DASHBOARD_DATA.reports.map((report) => (
            <Card key={report} className="border-brand-border">
              <p className="text-lg font-bold text-brand-navy">{report}</p>
              <p className="mt-2 text-sm text-brand-muted">
                Ready to export or animate later without changing the navigation flow.
              </p>
              <DemoActionButton
                idleLabel="Generate Report"
                activeLabel="Report Ready"
                variant="outline"
                activeVariant="secondary"
                className="mt-4"
              />
            </Card>
          ))}
        </div>
      )}

      {tab === "billing" && (
        <div className="grid gap-6 md:grid-cols-3">
          {EMPLOYER_DASHBOARD_DATA.billing.map((item) => (
            <Card key={item} className="border-brand-border">
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      )}

      {tab === "settings" && (
        <div className="grid gap-4 md:grid-cols-2">
          {EMPLOYER_DASHBOARD_DATA.settings.map((item) => (
            <Card key={item} className="border-brand-border p-4">
              <p className="text-sm font-medium text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      )}
    </DashboardShell>
  );
}
