import OrangeButton from "@/components/atoms/button/orangeButton";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="py-10 mb-10 flex flex-col items-center">
        <H1Txt classname="text-[20px] md:text-[30px] mb-10">
          혁신적인 AI Tax Agent를 무료체험 해보세요
        </H1Txt>

        <OrangeButton classname="text-[18px] font-semibold">
          무료 체험하기
        </OrangeButton>
      </div>

      <div className=" flex justify-center py-10 bg-pwc-gray-50">
        <div className="max-w-7xl w-full px-10 flex flex-col md:flex-row items-center gap-20">
          <Image
            src={"/images/logo.svg"}
            alt="logoImg"
            width={80}
            height={40}
          />
          <div className="flex flex-col gap-5">
            <div>
              © 2025 PwC. Samil PricewaterhouseCoopers. All rights reserved.
            </div>
            <div className="flex gap-5">
              <div>개인정보 처리방침</div>
              <div>이용 약관</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
