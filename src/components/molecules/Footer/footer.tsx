import { Button } from "@/components/atoms/button/button";
import OrangeButton from "@/components/atoms/button/orangeButton";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import {
  MS_FORM_URL_FREE_TRIAL,
  MS_FORM_URL_INQUIRY,
} from "@/constants/redirect_url";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="px-5 md:px-0 text-center bg-gray-50 py-20 flex flex-col items-center">
        <H1Txt classname="text-sm md:text-[25px] pt-10 pb-5">
          당신을 위한 AI 세무 전문가를 지금 바로 만나보세요
        </H1Txt>

        <div className="flex flex-col md:flex-row items-center gap-4 my-10">
          <a
            href={MS_FORM_URL_INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-xl font-medium inline-flex items-center justify-center"
            >
              이용문의
            </Button>
          </a>
          <a
            href={MS_FORM_URL_FREE_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              size="lg"
              className="text-xl font-medium inline-flex items-center justify-center"
            >
              2주 무료 체험하기 <ArrowRight size={25} className="mb-1" />
            </Button>
          </a>
        </div>
      </div>
      <div className=" flex justify-center py-5 bg-pwc-gray-50">
        <div className="max-w-7xl w-full px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-20 items-start">
          <Image
            src={"/images/logo/logo2.svg"}
            alt="logoImg"
            width={80}
            height={40}
          />
          <div className="flex flex-col gap-5 text-sm">
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
