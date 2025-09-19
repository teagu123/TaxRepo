import { Button } from "@/components/atoms/button/button";
import { URL_LIST } from "@/constants/gnbList";
import { MS_FORM_URL_FREE_TRIAL } from "@/constants/redirect_url";
import { cn } from "@/utils/cn";
import { ExternalLink } from "lucide-react"; //ChevronDown
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function WebGnb() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // close dropdown on route change
    setIsDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isDropdownOpen) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [isDropdownOpen]);

  // Close dropdown on ESC
  useEffect(() => {
    if (!isDropdownOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isDropdownOpen]);

  return (
    <div className="hidden lg:flex h-16 bg-white border-b-1 border-b-pwc-gray-200 fixed top-0 left-0 right-0 z-50 px-3 xl:px-20">
      {/* PC 이상에서는 flex 한 줄 */}
      <div className="flex w-full h-16 items-stretch justify-between">
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className="flex h-full gap-3 items-stretch font-semibold">
          <Link href={"/"} onClick={handleClick}>
            <div className="flex items-center mr-5 h-full">
              <Image
                src={"/images/logo/logo_black_withoutPwC.svg"}
                alt="logoImg"
                width={300}
                height={36}
                className="-translate-y-px min-w-[300px]"
              />
            </div>
          </Link>
          {URL_LIST.map((el, idx) => {
            return (
              <Link href={el.url} key={idx}>
                <div
                  className={cn(
                    "relative px-3 inline-flex cursor-pointer h-full items-center text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-orange-500 after:transition-transform after:duration-200 hover:after:scale-x-100"
                  )}
                >
                  {el.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="link">
            Tax Agent 사용하기 <ExternalLink />
          </Button>
          <a
            href={MS_FORM_URL_FREE_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default">2주 무료 체험하기</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
