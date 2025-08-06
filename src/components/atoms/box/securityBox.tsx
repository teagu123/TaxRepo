import Image from "next/image";
import H1Txt from "../H1Txt/H1Txt";
import { SecurityBoxListType } from "@/constants/securityBoxList";

export default function SecurityBox({ data }: { data: SecurityBoxListType }) {
  return (
    <div className="bg-white rounded-xl p-7 flex flex-col justify-items-center items-center mt-10">
      <Image
        src={data.image}
        alt="iconsSample"
        width={80}
        height={80}
        className="mb-3"
      />

      <H1Txt>{data.title}</H1Txt>

      <div className="mt-3">{data.subTitle}</div>
    </div>
  );
}
