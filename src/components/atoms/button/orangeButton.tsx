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
      className={` px-3 py-1.5 text-white rounded-[5px] text-[13px]  cursor-pointer ${classname} ${
        isDisable ? "bg-gray-400" : " bg-taxAi-orange"
      }`}
    >
      {children}
    </div>
  );
}
