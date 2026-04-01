import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue-200",
        className
      )}
    >
      {children}
    </div>
  );
}
