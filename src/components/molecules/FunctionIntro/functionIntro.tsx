import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import QnABox from "../QnABox/qnaBox";
import { FunctionSampleListType } from "@/constants/functionIntroSampleList";

export default function FunctionIntro({
  data,
}: {
  data: FunctionSampleListType;
}) {
  return (
    <div>
      <H1Txt classname="my-10 lg:text-2xl text-xl">{data?.title}</H1Txt>
      <H1Txt classname="mb-3 lg:text-2xl text-xl">{data?.title1}</H1Txt>
      <H1Txt classname="lg:text-xl text-lg mb-3">{data?.title2}</H1Txt>
      <div className="mb-1 lg:text-xl text-lg">{data?.title3}</div>
      <div className="text-gray-400 text-[12px] mb-12 lg:text-lg text-md">
        {data?.title4}
      </div>

      <QnABox />
    </div>
  );
}
