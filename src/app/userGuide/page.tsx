"use client";
// app/pdf/page.tsx
import React, { useState } from "react";
import { Container } from "@/components/Template";

export default function PdfPage() {
  const navList = [
    {
      tag: "법인 관리자용",
      url: "/userGuide",
      pdf: "/pdf/sample.pdf",
    },
    {
      tag: "사용자용",
      url: "/",
      pdf: "/pdf/sample.pdf",
    },
  ];

  const [pdfUrl, setPdfUrl] = useState<string>("법인 관리자용");

  return (
    <main className="bg-white overflow-hidden flex justify-center items-start p-6">
      <Container className="w-full max-w-6xl h-full flex flex-col gap-6">
        <div className="my-14 text-3xl font-bold">이용 매뉴얼</div>

        {/* 모바일 전용: 상단 가로 네비 (sm 이하에서 보임) */}
        <div className="w-full md:hidden mb-4 ">
          <div className="flex gap-2 overflow-x-auto  ">
            {navList.map((el) => (
              <button
                key={el.url}
                onClick={() => setPdfUrl(el.tag)}
                className={`whitespace-nowrap px-4 py-2 rounded-md text-sm
                  transition-all duration-150
                  ${
                    el.tag === pdfUrl
                      ? "bg-pwc-orange-50 text-pwc-orange-600 shadow-sm"
                      : "bg-white text-[#8B91A0]"
                  }
                  focus:outline-none focus:ring-2 focus:ring-pwc-orange-100`}
              >
                {el.tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex h-full w-full">
          {/* 데스크탑: 기존 사이드바 유지 (md 이상에서 보임) */}
          <aside className="hidden md:block w-48 shrink-0 text-base font-bold ">
            {navList.map((el) => (
              <div
                key={el.url}
                onClick={() => setPdfUrl(el.tag)}
                className={`${
                  el.tag === pdfUrl
                    ? "text-pwc-orange-500  border-l-3 border-pwc-orange-500"
                    : "text-[#8B91A0]  border-l-3  border-pwc-gray-200 "
                } pl-4 py-1.5 cursor-pointer`}
              >
                {el.tag}
              </div>
            ))}
          </aside>

          {/* 모바일에서는 사이드바가 숨겨지고 이 본문만 보입니다 */}
          <div className="w-full min-h-[1000px]  pb-10">
            <iframe
              src={
                pdfUrl === "법인 관리자용"
                  ? "/pdf/sample.pdf#view=FitH&pagemode=none"
                  : "/pdf/sample2.pdf#view=FitH&pagemode=none"
              }
              title="PDF preview"
              className="h-full shadow-md w-full"
              style={{ minHeight: "60vh" }} // 모바일에서 너무 작아 보이지 않게 최소 높이 설정
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
