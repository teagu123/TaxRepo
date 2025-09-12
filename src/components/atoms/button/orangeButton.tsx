import React from "react";

export default function OrangeButton({
  children,
  classname,
  isDisable = false,
}: {
  children: React.ReactNode;
  classname?: string;
  isDisable?: boolean;
}) {
  return (
    <div
      className={` px-5 py-1.5 text-white rounded-full text-[13px]  cursor-pointer ${classname} ${
        isDisable ? "bg-gray-400" : "bg-pwc-orange-500"
      }`}
    >
      {children}
    </div>
  );
}
