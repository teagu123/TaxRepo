import { Button } from "@/components/atoms/button/button";
import { URL_LIST, SUPPORT_LIST } from "@/constants/gnbList";
import { cn } from "@/utils/cn";
import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function WebGnb() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isSupportActive = SUPPORT_LIST.some((item) => item.url === pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(pathname);

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault(); // Link 기본 동작 막기
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
    <div className="hidden md:flex h-16 bg-white border-b-1 border-b-pwc-gray-200 fixed top-0 left-0 right-0 z-50 px-10 lg:px-20">
      {/* PC 이상에서는 flex 한 줄 */}
      <div className="flex w-full h-16 items-stretch justify-between">
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className="flex h-full gap-3 items-stretch font-semibold">
          <Link href={"/"} onClick={handleClick}>
            <div className="flex items-center mr-5 h-full">
              <Image
                src={"/images/logo.svg"}
                alt="logoImg"
                width={300}
                height={36}
                className="-translate-y-px"
              />
            </div>
          </Link>
          {URL_LIST.map((el, idx) => {
            const isActive = pathname === el.url && pathname !== "/";
            return (
              <Link href={el.url} key={idx}>
                <div
                  className={cn(
                    "relative px-3 inline-flex cursor-pointer h-full items-center text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-orange-500 after:transition-transform after:duration-200 hover:after:scale-x-100",
                    isActive ? "after:scale-x-100" : ""
                  )}
                >
                  {el.label}
                </div>
              </Link>
            );
          })}

          {/* 고객센터 드롭다운 */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button
              type="button"
              id="desktop-support-button"
              onClick={() => {}}
              aria-haspopup="menu"
              aria-expanded={isDropdownOpen}
              aria-controls="desktop-support-menu"
              className={cn(
                "relative px-3 inline-flex cursor-pointer h-full items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-pwc-orange-500/40 text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:origin-left after:bg-pwc-orange-500 after:transition-transform after:duration-200 hover:after:scale-x-100",
                isSupportActive ? "after:scale-x-100" : ""
              )}
            >
              고객센터
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform ml-2",
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            {isDropdownOpen && (
              <div
                id="desktop-support-menu"
                role="menu"
                aria-labelledby="desktop-support-button"
                className="absolute left-0 top-full min-w-[12rem] bg-white shadow-xl ring-1 ring-black/5 rounded-lg py-2"
              >
                {SUPPORT_LIST.map((el, idx) => {
                  const active = pathname === el.url;
                  return (
                    <Link href={el.url} key={idx}>
                      <div
                        role="menuitem"
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none",
                          active ? "text-pwc-orange-500 bg-pwc-orange-50" : ""
                        )}
                      >
                        {el.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 오른쪽: 이용문의 버튼 */}
        <div className="flex items-center gap-3">
          <Button variant="link">
            서비스 바로가기 <ExternalLink />
          </Button>
          <Button variant="default">무료 체험하기</Button>
        </div>
      </div>
    </div>
  );
}
