"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import TaxLawsMarquee from "@/components/atoms/card/carouselCard";
import { PromptEnhancer } from "@/components/atoms/card/promptEnhancer";

function TextLine({
  children,
  index,
  progress,
}: {
  children: React.ReactNode;
  index: number;
  progress: MotionValue<number>;
}) {
  const STAGGER = 0.1;
  const DURATION = 0.28;
  const start = index * STAGGER;
  const end = start + DURATION;

  const reveal = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const opacity = useSpring(reveal, { stiffness: 210, damping: 24, mass: 0.3 });
  const y = useTransform(reveal, [0, 1], [12, 0]);
  const scale = useTransform(reveal, [0, 1], [0.985, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="leading-tight will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export function KeyFeaturesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const STEPS = [
    {
      lines: [
        "매주 업데이트되는 법령 예규 판례",
        "매주 추가되는 최신 세법자료를 바탕으로",
        "언제나 최적의 답변을 제공합니다",
      ],
      component: <TaxLawsMarquee />,
      alt: "Intro1",
    },
    {
      lines: [
        "AI 인용 자료의 원문 제공",
        "AI가 사용자의 질의와 관련한 법령 및 예규,",
        "판례를 찾아서 제시해 줄 뿐만 아니라",
        "해당 자료를 삼일아이닷컴과 연동하여 즉각적으로 확인할 수 있습니다.",
      ],
      component: (
        <PromptEnhancer
          IMAGES={[
            "/images/supportingdocs/grid2.svg",
            "/images/supportingdocs/grid3.svg",
            "/images/supportingdocs/grid4.svg",
          ]}
        />
      ),
      alt: "Intro2",
    },
    {
      lines: [
        "부족한 질문도 AI가 알아서 해결",
        "AI가 질의내용을 분석하여 답변에 필요한 추가정보를 요청합니다",
      ],
      component: (
        <PromptEnhancer
          IMAGES={[
            "/images/supportingdocs/grid2.svg",
            "/images/supportingdocs/grid3.svg",
            "/images/supportingdocs/grid4.svg",
          ]}
        />
      ),
      alt: "Intro3",
    },
    {
      lines: [
        "모자란 정보는 AI가 알아서 웹 검색",
        "AI가 질의내용을 분석하여 사전에 학습된 세법자료 외에",
        "추가자료가 필요하다고 판단하는 경우 알아서 웹검색을 수행합니다",
      ],
      component: (
        <PromptEnhancer
          IMAGES={[
            "/images/supportingdocs/grid2.svg",
            "/images/supportingdocs/grid3.svg",
            "/images/supportingdocs/grid4.svg",
          ]}
        />
      ),
      alt: "Intro4",
    },
  ] as const;

  // 스텝 타임라인
  const WIN = 0.18; // 보이는 구간
  const GAP = 0.06; // 전환 간격

  // 라인 애니메이션(각 스텝 내 순차 등장)
  const stepProgress = STEPS.map((_, i) => {
    const start = i * (WIN + GAP);
    const end = start + WIN;
    const raw = useTransform(scrollYProgress, [start, end], [0, 1], {
      clamp: true,
    });
    return useSpring(raw, { stiffness: 160, damping: 22 });
  });

  const textOpacities = STEPS.map((_, i) => {
    const start = i * (WIN + GAP);
    const end = start + WIN;
    return useTransform(
      scrollYProgress,
      [start, start + 0.06, end - 0.06, end],
      [0, 1, 1, 0]
    );
  });

  // ✅ 이미지 누적 쌓기: 등장 시 0→1로 페이드 인하고, 이후 쭉 1을 유지
  const imageOpacities = STEPS.map((_, i) => {
    if (i === 0) {
      // 첫 번째 이미지는 처음부터 바로 1
      return useTransform(scrollYProgress, [0, 0.001], [1, 1], { clamp: true });
    }
    const start = i * (WIN + GAP);
    // start ~ start+0.06 동안만 0→1, 이후 계속 1 유지 (clamp)
    return useTransform(scrollYProgress, [start, start + 0.06], [0, 1], {
      clamp: true,
    });
  });

  // 등장할 때만 살짝 커지며 생기는 느낌
  const imageScales = stepProgress.map((p) =>
    useTransform(p, [0, 1], [0.985, 1])
  );

  // (옵션) 배경 전환
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1, 1, 1],
    ["#ffffff", "#000000", "#000000", "#ffffff"]
  );

  return (
    <motion.section ref={ref} className="relative" style={{ backgroundColor }}>
      <div className="h-[450vh]">
        <div className="sticky top-0 h-svh md:h-screen">
          <div className="mx-auto grid h-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-14">
            {/* 왼쪽 텍스트 */}
            <div className="relative">
              {STEPS.map((step, i) => (
                <motion.div
                  key={`text-${i}`}
                  style={{ opacity: textOpacities[i] }}
                  className={
                    i === 0
                      ? "max-w-[620px]"
                      : "pointer-events-none absolute inset-0 max-w-[620px]"
                  }
                >
                  {step.lines.map((t, li) => (
                    <TextLine
                      key={`t-${i}-${li}`}
                      index={li}
                      progress={stepProgress[i]}
                    >
                      <span
                        className={
                          li === 0
                            ? "text-[32px] font-semibold text-white"
                            : "text-[23px] md:text-2xl text-white/90"
                        }
                      >
                        {t}
                      </span>
                    </TextLine>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* 오른쪽 이미지 (차곡차곡 쌓임) */}
            <div className="relative w-full">
              <div className="relative h-[68vh] w-full md:h-[84vh]">
                {STEPS.map((step, i) => (
                  <motion.div
                    key={`img-${i}`}
                    style={{
                      opacity: imageOpacities[i], // 나타난 후 계속 1
                      scale: imageScales[i], // 등장 시만 살짝 스케일
                      zIndex: 10 + i, // 뒤→앞으로 쌓이도록 z-index 증가
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <div className=" h-full flex items-center">
                      {step.component}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
