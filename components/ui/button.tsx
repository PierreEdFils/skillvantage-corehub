import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth, asChild, children, ...props }, ref) => {
    const variants = {
      primary:
        "bg-brand-orange-500 hover:bg-brand-orange-600 text-white shadow-lg shadow-brand-orange-200",
      secondary: "bg-gray-900 hover:bg-gray-800 text-white",
      outline: "border border-gray-200 hover:bg-gray-50 text-gray-700",
      ghost: "hover:bg-gray-100 text-gray-700"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3 text-base"
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-semibold transition-all",
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ className?: string }>;

      return cloneElement(child, {
        className: cn(classes, child.props.className)
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
