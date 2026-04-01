import { cn, getInitials } from "@/lib/utils";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  gradient?: string;
  className?: string;
}

export default function Avatar({
  name,
  size = "md",
  gradient = "from-brand-blue-600 to-brand-orange-500",
  className
}: AvatarProps) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-12 w-12 text-base",
    xl: "h-16 w-16 text-lg"
  };

  return (
    <div
      className={cn(
        `flex items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white`,
        sizes[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
