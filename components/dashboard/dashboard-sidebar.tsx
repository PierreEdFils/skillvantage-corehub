"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { LifeBuoy } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/badge";
import LogoutButton from "./logout-button";

interface DashboardLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tab: string;
  badge?: string;
}

export default function DashboardSidebar({
  brandLabel,
  accentGradient,
  accentClassName,
  helpTitle,
  helpText,
  helpAccentClassName,
  links
}: {
  brandLabel: string;
  accentGradient: string;
  accentClassName: string;
  helpTitle: string;
  helpText: string;
  helpAccentClassName: string;
  links: DashboardLink[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentTab = searchParams.get("tab") || "";

  return (
    <aside className="hidden border-r border-slate-200 bg-white lg:flex lg:min-h-screen lg:flex-col">
      <div className="border-b border-slate-200 px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-black text-white", accentGradient)}>
            SV
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-900">SkillVantage</p>
            <p className={cn("text-xs font-medium uppercase tracking-[0.2em]", accentClassName)}>
              {brandLabel}
            </p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 px-4 py-6">
        {links.map((item) => {
          const Icon = item.icon;
          const itemPath = item.href.split("?")[0];
          const active =
            pathname === itemPath &&
            ((item.tab === "" && currentTab === "") || currentTab === item.tab);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                active
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
          <p className="text-sm font-semibold">{helpTitle}</p>
          <p className="mt-1 text-xs leading-5 text-slate-300">{helpText}</p>
          <button className={cn("mt-4 inline-flex items-center gap-2 text-sm font-semibold", helpAccentClassName)}>
            <LifeBuoy className="h-4 w-4" />
            Help Center
          </button>
        </div>

        <LogoutButton />
      </div>
    </aside>
  );
}
