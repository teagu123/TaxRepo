"use client";

import {
  motion,
  useScroll, //특정 DOM 타깃의 스크롤 진행도를 0~1 사이 값으로 제공한다.
  useTransform, //scrollYProgress을 구간별로 다른 출력 값으로 변환하기 위해서 사용
  useSpring, //useSpring은 딱딱 끊기는 부분을 완화해주기 위해서
  type MotionValue, //MotionValue은 Framer motion이 실시간으로 추적하는 값의 타입이다.
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function TextLine({
  children,
  index,
  progress,
}: {
  children: React.ReactNode;
  index: number;
  progress: MotionValue<number>;
}) {
  const STAGGER = 0.18;
  const DURATION = 0.28;
  const start = index * STAGGER;
  const end = start + DURATION;

  const reveal = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const opacity = useSpring(reveal, { stiffness: 210, damping: 24, mass: 0.3 });
  const y = useTransform(reveal, [0, 1], [14, 0]);
  const scale = useTransform(reveal, [0, 1], [0.98, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="leading-tight will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export function IntroImageSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /** 배경색 전환 */
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#ffffff", "#000000", "#000000", "#ffffff"]
  );

  const p1Raw = useTransform(scrollYProgress, [0.12, 0.32], [0, 1], {
    clamp: true,
  });
  const p2Raw = useTransform(scrollYProgress, [0.48, 0.68], [0, 1], {
    clamp: true,
  });
  const p1 = useSpring(p1Raw, { stiffness: 160, damping: 22 });
  const p2 = useSpring(p2Raw, { stiffness: 160, damping: 22 });

  /** 검정 스크림(둘 다에서 켜짐) */
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.68, 0.72],
    [0, 0.8, 0.8, 0] // 필요 시 0.6~0.9로 조절
  );

  /** 1번 이미지: 중앙 → 오른쪽으로 이동 & 축소 (p1에 따라) */
  const firstScale = useTransform(p1, [0, 1], [1, 0.9]);
  const firstX = useTransform(p1, [0, 1], [0, 260]); // 오른쪽으로 px 이동(뷰포트에 맞춰 조절 가능)
  // p2가 시작되면 1번 이미지는 서서히 사라짐
  // const firstOpacity = useTransform();

  /** 2번 이미지: p2에서 등장 → 동일하게 오른쪽 이동 & 축소 */
  const secondOpacity = useTransform(p2, [0, 0.2], [0, 1]);
  const secondScale = useTransform(p2, [0, 1], [1, 0.9]);
  const secondX = useTransform(p2, [0, 1], [0, 260]);

  /** 텍스트(왼쪽) 라인들 */
  const firstLines = [
    "세무 데이터, 한 곳에서 정리",
    "증빙·첨부 업로드 자동화",
    "검증 상태까지 한눈에",
  ];
  const secondLines = [
    "AI 검증으로 더 빠르게",
    "상태·이슈를 한눈에",
    "다운로드와 공유까지 원클릭",
  ];

  /** 텍스트 컨테이너 가시성 (겹침 방지) */
  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0.12, 0.22, 0.48, 0.56],
    [0, 1, 1, 0]
  );
  const secondTextOpacity = useTransform(scrollYProgress, [0.48, 0.56], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[300vh]"
      style={{ backgroundColor }}
    >
      <div className="sticky top-10 h-screen">
        {/* 중앙 기준 레이어 스테이지 */}
        <div className="relative h-full flex items-center justify-center">
          {/* 1) 첫 이미지: p1에서 오른쪽으로 이동 + 축소 */}
          <motion.div
            style={{ x: firstX, scale: firstScale, opacity: 1 }}
            className="absolute z-50 will-change-transform"
          >
            <Image
              src="/images/introImage/intro1.svg"
              alt="Intro1"
              width={1100}
              height={800}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* 2) 두 번째 이미지: p2에서 동일 위치(오른쪽)로 등장 */}
          <motion.div
            style={{ x: secondX, scale: secondScale, opacity: secondOpacity }}
            className="absolute z-51 will-change-transform"
          >
            <Image
              src="/images/introImage/intro2.svg"
              alt="Intro2"
              width={1100}
              height={800}
              className="object-contain"
            />
          </motion.div>

          {/* 3) 검정 스크림(텍스트 아래에서 이미지 위를 덮음) */}
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="pointer-events-none absolute inset-0 z-25 bg-black"
          />
        </div>

        {/* 4) 왼쪽 텍스트 (스크림 위, 이미지 위) */}
        <div className="pointer-events-none absolute inset-0 z-30">
          <div className="h-full flex items-center">
            {/* 좌측 여백(반응형) 조절: pl-6 md:pl-[6vw] */}
            <div className="w-full  mx-auto pl-3 text-[18px] md:pl-[6vw]">
              {/* 첫 번째 설명 */}
              <motion.div
                style={{ opacity: firstTextOpacity }}
                className="max-w-[560px]"
              >
                {firstLines.map((t, i) => (
                  <TextLine key={`f-${i}`} index={i} progress={p1}>
                    <span
                      className={
                        i === 0
                          ? "text-[30px] font-semibold text-white"
                          : "text-[23px] md:text-2xl text-white/90"
                      }
                    >
                      {t}
                    </span>
                  </TextLine>
                ))}
              </motion.div>

              {/* 두 번째 설명 */}
              <motion.div
                style={{ opacity: secondTextOpacity }}
                className="max-w-[560px] absolute"
              >
                {secondLines.map((t, i) => (
                  <TextLine key={`s-${i}`} index={i} progress={p2}>
                    <span
                      className={
                        i === 0
                          ? "text-[30px] font-semibold text-white"
                          : "text-[23px] md:text-2xl text-white/90"
                      }
                    >
                      {t}
                    </span>
                  </TextLine>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
