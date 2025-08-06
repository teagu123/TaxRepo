"use client";
import OrangeButton from "@/components/atoms/button/orangeButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GNB() {
  const pathname = usePathname();

  const urlList = [
    {
      url: "/",
      label: "AI 서비스",
    },
    {
      url: "/usage",
      label: "이용 안내",
    },
    {
      url: "/price",
      label: "요금 안내",
    },
  ];

  return (
    <>
      <div className="bg-white border-b-1 border-b-gray-200 fixed top-0 left-0 right-0 z-50 pt-5 px-10 lg:px-20">
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
                className="pb-3 mr-5"
              />
            </Link>
            {urlList.map((el, idx) => {
              const isActive = pathname === el.url && pathname !== "/";
              return (
                <Link href={el.url} key={idx}>
                  <div
                    className={`
                      cursor-pointer 
                      border-b-[5px] 
                      border-transparent 
                      hover:border-b-orange-500 
                      ${isActive ? "border-b-orange-500" : ""}
                      pb-[10px] /* border 두께만큼 padding-bottom 줘서 높이 변동 방지 */
                    `}
                  >
                    {el.label}
                  </div>
                </Link>
              );
            })}
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
          <div className="mt-3 flex justify-start gap-8 text-sm font-semibold">
            {urlList.map((el, idx) => {
              const isActive = pathname === el.url && pathname !== "/";
              return (
                <Link href={el.url} key={idx}>
                  <div
                    className={`
                      cursor-pointer
                      border-b-[5px]
                      border-transparent
                      hover:border-orange-500
                      ${isActive ? "border-orange-500" : ""}
                      pb-[6px]
                    `}
                  >
                    {el.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* fixed 상단 공간 확보 */}
      <div className="h-[104px] md:h-[64px]" />
    </>
  );
}
