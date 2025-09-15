import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-5 lg:p-0 max-w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
}
