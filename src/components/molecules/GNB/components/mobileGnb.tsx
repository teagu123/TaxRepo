import { Button } from "@/components/atoms/button/button";
import { URL_LIST } from "@/constants/gnbList";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { MS_FORM_URL_FREE_TRIAL } from "@/constants/redirect_url";

export function MobileGnb() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 라우트 변경 시 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // ESC로 닫기
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // 바디 스크롤 잠금
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-pwc-black border-b border-gray-800">
      {/* Top bar */}
      <div className="h-16 px-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/logo/logo_black_withoutPwC.svg"}
            alt="logoImg"
            width={220}
            height={220}
            priority
          />
        </Link>

        {/* 메뉴 아이콘 */}
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/60 hover:bg-white/10 active:bg-white/15"
        >
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Full overlay menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        className={cn(
          "fixed inset-0 top-16 z-50 flex flex-col",
          "bg-pwc-black/95 backdrop-blur supports-[backdrop-filter]:bg-pwc-black/80",
          "transition-[opacity,transform] duration-200 ease-[cubic-bezier(.22,1,.36,1)]",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        {/* 스크롤 컨텐츠 */}
        <div className="flex-1 overflow-y-auto">
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
                        "py-3 border-b border-gray-700 cursor-pointer",
                        isActive ? "text-pwc-orange-500" : "text-white"
                      )}
                    >
                      {el.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* 하단 CTA 영역 */}
        <div className="sticky bottom-0">
          <div className="px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] grid grid-cols-1 gap-2">
            <a
              href={MS_FORM_URL_FREE_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="sm"
                className="w-full text-[13px] text-pwc-black"
              >
                2주 무료 체험하기
              </Button>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="w-full text-[13px] border-white/70 text-pwc-black hover:bg-white/10"
            >
              Tax Agent 사용하기
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay 클릭 닫기 */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 md:hidden z-40"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
