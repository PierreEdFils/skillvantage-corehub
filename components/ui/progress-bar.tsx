interface ProgressBarProps {
  value: number;
  color?: "brand" | "emerald" | "blue" | "amber" | "red";
}

export default function ProgressBar({
  value,
  color = "brand"
}: ProgressBarProps) {
  const colors = {
    brand: "bg-brand-orange-500",
    emerald: "bg-emerald-500",
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    red: "bg-red-500"
  };

  return (
    <div className="w-full rounded-full bg-gray-200 h-2 overflow-hidden">
      <div
        className={`${colors[color]} h-2 rounded-full transition-all duration-500`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
