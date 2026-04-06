import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

interface DashboardLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tab: string;
  badge?: string;
}

export default function DashboardShell({
  brandLabel,
  accentGradient,
  accentClassName,
  helpTitle,
  helpText,
  helpAccentClassName,
  dateLabel,
  title,
  userName,
  userRole,
  alertCount,
  links,
  children
}: {
  brandLabel: string;
  accentGradient: string;
  accentClassName: string;
  helpTitle: string;
  helpText: string;
  helpAccentClassName: string;
  dateLabel: string;
  title: string;
  userName: string;
  userRole: string;
  alertCount: number;
  links: DashboardLink[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 text-gray-900 transition-colors lg:grid lg:grid-cols-[256px_1fr]">
      <DashboardSidebar
        brandLabel={brandLabel}
        accentGradient={accentGradient}
        accentClassName={accentClassName}
        helpTitle={helpTitle}
        helpText={helpText}
        helpAccentClassName={helpAccentClassName}
        links={links}
      />
      <div className="min-w-0">
        <DashboardHeader
          dateLabel={dateLabel}
          title={title}
          userName={userName}
          userRole={userRole}
          alertCount={alertCount}
          accentGradient={accentGradient}
        />
        <main className="px-6 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
