import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}  w-full lg:px-30 px-10`}>{children}</div>
  );
}
