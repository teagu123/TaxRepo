import OrangeButton from "@/components/atoms/button/orangeButton";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="bg-gray-100 pb-10 flex flex-col items-center">
        <H1Txt classname="text-[20px] py-10">
          당신을 위한 AI 세무 전문가를 지금 바로 만나보세요
        </H1Txt>

        <OrangeButton classname="p-10 flex items-center gap-1 text-[16px]">
          <div>무료 체험하기</div> <ArrowRight size={13} className="mb-1" />
        </OrangeButton>
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
