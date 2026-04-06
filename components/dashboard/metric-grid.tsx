import { LucideIcon } from "lucide-react";
import StatCard from "@/components/ui/stat-card";

interface Metric {
  label: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  changeType?: "positive" | "neutral" | "negative";
}

export default function MetricGrid({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <StatCard
          key={metric.label}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          change={metric.change}
          changeType={metric.changeType}
        />
      ))}
    </div>
  );
}
