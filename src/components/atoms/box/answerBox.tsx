import React from "react";

export default function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className=" p-7 rounded-xl flex items-start gap-3 border-1 border-gray-200">
      <div className="text-white bg-[#D04A02] min-w-10 min-h-10 flex justify-center items-center pb-1 text-[13px] font-extrabold rounded-[50%]">
        PWC
      </div>
      <div className="text-[14px]">{children}</div>
    </div>
  );
}
