import { LucideIcon } from "lucide-react";
import Badge from "./badge";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  changeType?: "positive" | "neutral" | "negative";
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  change,
  changeType = "neutral"
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-100">
          <Icon className="h-5 w-5 text-brand-blue-700" />
        </div>
        {change && (
          <Badge
            variant={
              changeType === "positive"
                ? "success"
                : changeType === "negative"
                ? "danger"
                : "default"
            }
          >
            {change}
          </Badge>
        )}
      </div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-extrabold text-gray-900">{value}</p>
    </div>
  );
}
