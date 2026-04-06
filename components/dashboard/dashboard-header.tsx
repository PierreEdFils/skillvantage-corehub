import { Bell } from "lucide-react";
import Avatar from "@/components/ui/avatar";

export default function DashboardHeader({
  dateLabel,
  title,
  userName,
  userRole,
  alertCount,
  accentGradient
}: {
  dateLabel: string;
  title: string;
  userName: string;
  userRole: string;
  alertCount: number;
  accentGradient: string;
}) {
  return (
    <header className="sticky top-20 z-10 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
      <div className="flex flex-col gap-4 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{dateLabel}</p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900">
            <Bell className="h-5 w-5" />
            <span className="absolute right-0 top-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white">
              {alertCount}
            </span>
          </button>
          <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <Avatar name={userName} gradient={accentGradient} />
            <div className="pr-2">
              <p className="text-sm font-semibold text-slate-900">{userName}</p>
              <p className="text-xs text-slate-500">{userRole}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
