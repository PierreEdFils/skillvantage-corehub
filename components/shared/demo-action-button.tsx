"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/button";

export default function DemoActionButton({
  idleLabel,
  activeLabel,
  variant = "primary",
  activeVariant = "secondary",
  size = "sm",
  fullWidth,
  className
}: {
  idleLabel: string;
  activeLabel: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  activeVariant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <Button
      type="button"
      variant={active ? activeVariant : variant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      onClick={() => setActive((current) => !current)}
    >
      {active ? <Check className="mr-2 h-4 w-4" /> : null}
      {active ? activeLabel : idleLabel}
    </Button>
  );
}
