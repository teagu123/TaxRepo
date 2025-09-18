import Image from "next/image";
import H1Txt from "../H1Txt/H1Txt";
import { SecurityBoxListType } from "@/constants/securityBoxList";

export default function SecurityBox({ data }: { data: SecurityBoxListType }) {
  return (
    <div className="bg-white rounded-xl p-7 flex flex-col justify-items-center items-center mt-10">
      <div className="w-23 h-23 mb-4">
        <Image src={data.image} alt="iconsSample" width={120} height={120} />
      </div>

      <H1Txt> {data.title}</H1Txt>

      <div className="mt-3 break-keep">{data.subTitle}</div>
    </div>
  );
}
