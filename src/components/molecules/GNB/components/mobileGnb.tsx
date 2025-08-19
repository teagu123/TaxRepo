import { Button } from "@/components/atoms/button/button";
import { URL_LIST, SUPPORT_LIST } from "@/constants/gnbList";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export function MobileGnb() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const isSupportActive = SUPPORT_LIST.some((item) => item.url === pathname);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSupportOpen(false);
  }, [pathname]);

  // Close on ESC
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

  // Scroll lock when menu is open
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
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b-1 border-b-pwc-gray-200">
      {/* Top bar */}
      <div className="h-16 px-5 flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/logo.svg"}
            alt="logoImg"
            width={60}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="default" className="whitespace-nowrap">
            무료 체험하기
          </Button>
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

            {/* 고객센터 accordion */}
            <div className="border-b border-gray-100">
              <button
                type="button"
                onClick={() => setIsSupportOpen((v) => !v)}
                className={`w-full flex items-center justify-between py-3 ${
                  isSupportActive ? "text-orange-600" : "text-gray-800"
                }`}
                aria-expanded={isSupportOpen}
                aria-controls="mobile-support-menu"
              >
                <span>고객센터</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isSupportOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>
              <div
                id="mobile-support-menu"
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(.22,1,.36,1)] ml-3 z-50",
                  isSupportOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  {SUPPORT_LIST.map((item, idx) => (
                    <Link href={item.url} key={idx} onClick={closeMenu}>
                      <div
                        className={cn(
                          "py-3 hover:text-pwc-orange-500",
                          pathname === item.url ? "text-pwc-orange-500" : ""
                        )}
                      >
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
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
