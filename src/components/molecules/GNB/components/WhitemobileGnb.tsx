import { Button } from "@/components/atoms/button/button";
import { URL_LIST } from "@/constants/gnbList";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export function MobileGnb() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSupportOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsSupportOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSupportOpen(false);
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b-1 border-b-pwc-gray-200">
      {/* Top bar */}
      <div className="h-16 px-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/logo/logo_withoutPwC.svg"}
            alt="logoImg"
            width={10}
            height={10}
            className="min-w-50"
          />
        </Link>

        {/* 상단바 버튼들 제거 → 메뉴 아이콘만 남김 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-pwc-gray-200 hover:bg-pwc-gray-50 active:bg-pwc-gray-100"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Slide-down panel */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={cn(
          "absolute top-16 left-0 right-0 z-50 bg-white shadow-md overflow-hidden transition-[clip-path,opacity] duration-200 ease-[cubic-bezier(.22,1,.36,1)] will-change-[clip-path,opacity]",
          isMenuOpen
            ? "opacity-100 [clip-path:inset(0_0_0_0)] pointer-events-auto"
            : "opacity-0 [clip-path:inset(0_0_100%_0)] pointer-events-none"
        )}
      >
        {/* 패널 컨텐트 높이/스크롤 설정 */}
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav
            className={cn(
              "px-5 py-3 text-sm font-semibold transition-opacity duration-150",
              isMenuOpen ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex flex-col">
              {URL_LIST.map((el, idx) => {
                const isActive = pathname === el.url && pathname !== "/";
                return (
                  <Link href={el.url} key={idx} onClick={closeMenu}>
                    <div
                      className={cn(
                        "py-3 border-b border-gray-100 cursor-pointer",
                        isActive ? "text-pwc-orange-500" : "text-gray-800"
                      )}
                    >
                      {el.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* ▼▼▼ 하단 스티키 CTA 영역 (요청하신 두 버튼 이동) ▼▼▼ */}
          <div className="sticky bottom-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t border-gray-100">
            <div className="px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] grid grid-cols-1 gap-2">
              <Button
                variant="default"
                size="sm"
                className="w-full text-[13px]"
              >
                2주 무료 체험하기
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full text-[13px]"
              >
                Tax Agent 사용하기
              </Button>
            </div>
          </div>
          {/* ▲▲▲ */}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
