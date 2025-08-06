import { StepListType } from "@/constants/stepList";
import React from "react";
import H1Txt from "../H1Txt/H1Txt";

export default function StepBox({ data }: { data: StepListType }) {
  return (
    <div className=" p-7 rounded-xl flex items-center gap-3 border-1 border-gray-200 mb-5 shadow-md">
      <div className="text-orange-600 mr-5  flex justify-center items-center text-[20px] font-extrabold ">
        STEP {data.id}
      </div>
      <div>
        <H1Txt classname="mb-2">{data.title}</H1Txt>
        <div>{data.subTitle}</div>
      </div>
    </div>
  );
}
