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
      className={` px-7 py-1.5 text-white rounded-[30px] text-[13px] max-w-fit
 cursor-pointer ${classname} ${
        isDisable ? "bg-gray-400" : " bg-pwc-orange-500"
      } hover:bg-pwc-orange-400`}
    >
      {children}
    </div>
  );
}
