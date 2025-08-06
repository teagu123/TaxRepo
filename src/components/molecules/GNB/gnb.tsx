import OrangeButton from "@/components/atoms/button/orangeButton";

import Image from "next/image";
import Link from "next/link";

export default function GNB() {
  return (
    <>
      <div className="bg-gray-100 fixed top-0 left-0 right-0 z-50 py-5 px-10 lg:px-20">
        {/* PC 이상에서는 flex 한 줄로, 모바일에서는 2줄 */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* 왼쪽: 로고 + 메뉴 */}
          <div className="flex items-center gap-8 font-semibold">
            <Link href={"/"}>
              <Image
                src={"/images/logo.svg"}
                alt="logoImg"
                width={60}
                height={40}
              />
            </Link>
            <Link href={"/"}>
              <div className="cursor-pointer">AI 서비스</div>
            </Link>
            <Link href={"/usage"}>
              <div className="cursor-pointer">이용 안내</div>
            </Link>
            <Link href={"/price"}>
              <div className="cursor-pointer">요금 안내</div>
            </Link>
          </div>

          {/* 오른쪽: 이용문의 버튼 */}
          <OrangeButton>이용문의</OrangeButton>
        </div>

        {/* 모바일 레이아웃 */}
        <div className="flex flex-col md:hidden">
          <div className="flex justify-between items-center">
            <Link href={"/"}>
              <Image
                src={"/images/logo.svg"}
                alt="logoImg"
                width={60}
                height={40}
              />
            </Link>
            <OrangeButton>이용문의</OrangeButton>
          </div>
          <div className="mt-3 flex justify-center gap-8 text-sm font-semibold">
            <Link href={"/"}>
              <div className="cursor-pointer">AI 서비스</div>
            </Link>
            <Link href={"/usage"}>
              <div className="cursor-pointer">이용 안내</div>
            </Link>
            <Link href={"/price"}>
              <div className="cursor-pointer">요금 안내</div>
            </Link>
          </div>
        </div>
      </div>

      {/* fixed 상단 공간 확보 */}
      <div className="h-[104px] md:h-[64px]" />
    </>
  );
}
