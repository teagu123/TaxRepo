import React from "react";

export default function OrangeButton({
  children,
  classname = "",
  isDisable = false,
  variant = "fill", // "fill" | "outline"
}: {
  children: React.ReactNode;
  classname?: string;
  isDisable?: boolean;
  variant?: "fill" | "outline";
}) {
  const base =
    "px-8 py-3 rounded-full text-xl font-medium inline-flex items-center justify-center";
  const state = isDisable ? "cursor-not-allowed" : "cursor-pointer";

  const fill = isDisable
    ? "bg-gray-400 text-white"
    : "bg-pwc-orange-500 text-white";

  const outline = isDisable
    ? "border border-gray-400 text-gray-400 bg-transparent"
    : "border border-pwc-orange-500 text-pwc-orange-500 bg-transparent";

  return (
    <div
      className={`${base} ${state} ${
        variant === "outline" ? outline : fill
      } ${classname}`}
    >
      {children}
    </div>
  );
}
