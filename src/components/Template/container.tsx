import React from "react";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}  w-full lg:px-50 md:60 px-10`}>
      {children}
    </div>
  );
}
