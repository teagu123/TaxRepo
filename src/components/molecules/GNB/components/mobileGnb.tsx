import OrangeButton from "@/components/atoms/button/orangeButton";
import { URL_LIST } from "@/constants/gnbList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileGnb({
  isDropdownOpen,
  toggleDropdown,
}: {
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col  md:hidden p-5">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="logoImg"
            width={60}
            height={40}
          />
        </Link>
        <div className="flex gap-2">
          <OrangeButton>무료체험신청</OrangeButton>
          <OrangeButton>로그인</OrangeButton>
        </div>
      </div>

      <div className="mt-3 flex justify-start gap-8 text-sm font-semibold">
        {URL_LIST.map((el, idx) => {
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

        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer border-b-[5px] border-transparent hover:border-orange-500 pb-[6px]"
          >
            고객센터
          </div>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md">
              <Link href="/notice">
                <div className=" px-4 py-2 w-23 text-[13px] hover:bg-gray-100 rounded-xl">
                  공지사항
                </div>
              </Link>
              <Link href="/inquiry">
                <div className="px-4 py-2 w-23 text-[13px] hover:bg-gray-100">
                  문의등록
                </div>
              </Link>
              <Link href="/faq">
                <div className="px-4 py-2 w-23 text-[13px] hover:bg-gray-100">
                  FAQ
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
