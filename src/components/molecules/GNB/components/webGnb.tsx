import OrangeButton from "@/components/atoms/button/orangeButton";
import { URL_LIST } from "@/constants/gnbList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function WebGnb({
  isDropdownOpen,
  toggleDropdown,
}: {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex  bg-white border-b-1 border-b-gray-200 fixed top-0 left-0 right-0 z-50 pt-5 px-10 lg:px-20">
      {/* PC 이상에서는 flex 한 줄로, 모바일에서는 2줄 */}
      <div className="flex w-full items-center justify-between">
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
          {URL_LIST.map((el, idx) => {
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

          <div className="relative">
            <div
              onClick={toggleDropdown}
              className="cursor-pointer border-b-[5px] border-transparent hover:border-b-orange-500 pb-[10px]"
            >
              고객센터
            </div>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                <Link href="/notice">
                  <div className="px-4 py-2 hover:bg-gray-100">공지사항</div>
                </Link>
                <Link href="/inquiry">
                  <div className="px-4 py-2 hover:bg-gray-100">문의등록</div>
                </Link>
                <Link href="/faq">
                  <div className="px-4 py-2 hover:bg-gray-100">FAQ</div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽: 이용문의 버튼 */}
        <div className="flex gap-3 pb-1">
          <OrangeButton>무료체험신청</OrangeButton>
          <OrangeButton>로그인</OrangeButton>
        </div>
      </div>
    </div>
  );
}
