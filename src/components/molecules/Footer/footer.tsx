import OrangeButton from "@/components/atoms/button/orangeButton";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-100 py-20 flex flex-col items-center">
        <H1Txt classname="text-[20px] md:text-[30px]">
          AI 회계 전문가가 필요하신가요?
        </H1Txt>
        <div className="text-[16px] md:text-[20px] my-10 text-center mx-5 md:mx-0">
          이용 문의를 통해 Samil Accounting Insight를 더 자세히 알아보세요.
        </div>
        <OrangeButton classname="text-[20px] font-bold">이용 문의</OrangeButton>
      </div>
      <div className=" flex justify-center py-5">
        <div className="max-w-7xl w-full px-10 flex flex-col md:flex-row items-center gap-20">
          <Image
            src={"/images/logo/logo2.svg"}
            alt="logoImg"
            width={80}
            height={40}
          />
          <div className="flex flex-col gap-5">
            <div>
              © 2025 PwC. Samil PricewaterhouseCoopers. All rights reserved.
            </div>
            <div className="flex gap-5">
              <Link href={"/rulePolicy"}>개인정보 처리방침</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
