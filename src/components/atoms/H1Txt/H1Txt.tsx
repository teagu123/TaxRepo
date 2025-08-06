import React from "react";

export default function H1Txt({
  children,
  classname,
}: {
  children: React.ReactNode;
  classname?: string;
}) {
  return <div className={`text-xl font-semibold ${classname}`}>{children}</div>;
}
