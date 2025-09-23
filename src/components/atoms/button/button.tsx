import * as React from "react";
import { cn } from "@/utils/cn";

// Base styles shared by all variants/sizes
const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-pwc-orange-400 focus-visible:ring-pwc-orange-400/50 focus-visible:ring-[3px] aria-invalid:ring-pwc-red/20 dark:aria-invalid:ring-pwc-red/40 aria-invalid:border-pwc-red";

// Variant class maps
const variantClasses = {
  default: "bg-pwc-orange-500 text-pwc-black shadow-xs hover:bg-pwc-orange-400",
  destructive:
    "bg-pwc-status-error-bg text-pwc-black shadow-xs hover:bg-pwc-red/90 focus-visible:ring-pwc-red/20 dark:focus-visible:ring-pwc-red/40 dark:bg-pwc-red/80",
  outline:
    "border border-pwc-gray-300 bg-pwc-white text-pwc-text-grey shadow-xs hover:bg-pwc-gray-50",
  secondary:
    "bg-pwc-gray-100 text-pwc-text-grey shadow-xs hover:bg-pwc-gray-200",
  ghost: "text-pwc-text-grey hover:bg-pwc-gray-50",
  link: "text-pwc-orange-500 underline-offset-4 hover:text-pwc-orange-400 hover:underline",
} as const;

// Size class maps
const sizeClasses = {
  default: "h-9 px-4 py-2 has-[>svg]:px-3",
  sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
  lg: "h-12 rounded-md px-8 has-[>svg]:px-6 ",
  icon: "size-9",
} as const;

export type ButtonVariant = keyof typeof variantClasses; // "default" | "destructive" | ...
export type ButtonSize = keyof typeof sizeClasses; // "default" | "sm" | ...

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
    "cursor-pointer"
  );
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
