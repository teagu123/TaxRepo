// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   type MotionValue,
// } from "framer-motion";
// import { useRef, type ReactNode } from "react";
// import TaxLawsMarquee from "@/components/atoms/card/carouselCard";
// import { PromptEnhancer } from "@/components/atoms/card/promptEnhancer";

// /** 라인별 순차 등장 텍스트 */
// function TextLine({
//   children,
//   index,
//   progress,
// }: {
//   children: React.ReactNode;
//   index: number;
//   progress: MotionValue<number>;
// }) {
//   const STAGGER = 0.1;
//   const DURATION = 0.28;
//   const start = index * STAGGER;
//   const end = start + DURATION;

//   const reveal = useTransform(progress, [start, end], [0, 1], { clamp: true });
//   const opacity = useSpring(reveal, { stiffness: 210, damping: 24, mass: 0.3 });
//   const y = useTransform(reveal, [0, 1], [12, 0]);
//   const scale = useTransform(reveal, [0, 1], [0.985, 1]);

//   return (
//     <motion.div
//       style={{ opacity, y, scale }}
//       className="leading-tight will-change-transform"
//     >
//       {children}
//     </motion.div>
//   );
// }

// /** ⬅️ 왼쪽 텍스트 스텝 */
// function StepText({
//   i,
//   lines,
//   scrollYProgress,
//   win,
//   gap,
// }: {
//   i: number;
//   lines: readonly string[];
//   scrollYProgress: MotionValue<number>;
//   win: number;
//   gap: number;
// }) {
//   const start = i * (win + gap);
//   const end = start + win;

//   // 이 스텝의 진행도 (라인 애니메이션용)
//   const raw = useTransform(scrollYProgress, [start, end], [0, 1], {
//     clamp: true,
//   });
//   const progress = useSpring(raw, { stiffness: 160, damping: 22 });

//   // 텍스트 컨테이너 자체 페이드
//   const opacity = useTransform(
//     scrollYProgress,
//     [start, start + 0.06, end - 0.06, end],
//     [0, 1, 1, 0]
//   );

//   return (
//     <motion.div
//       style={{ opacity }}
//       className={
//         i === 0
//           ? "max-w-[620px]"
//           : "pointer-events-none absolute inset-0 max-w-[620px]"
//       }
//     >
//       {lines.map((t, li) => (
//         <TextLine key={`t-${i}-${li}`} index={li} progress={progress}>
//           <span
//             className={
//               li === 0
//                 ? "text-[32px] font-semibold text-white"
//                 : "text-[23px] md:text-2xl text-white/90"
//             }
//           >
//             {t}
//           </span>
//         </TextLine>
//       ))}
//     </motion.div>
//   );
// }

// /** ➡️ 오른쪽 비주얼 스텝 (차곡차곡 쌓임) */
// function StepVisual({
//   i,
//   node,
//   scrollYProgress,
//   win,
//   gap,
// }: {
//   i: number;
//   node: ReactNode;
//   scrollYProgress: MotionValue<number>;
//   win: number;
//   gap: number;
// }) {
//   const start = i * (win + gap);
//   const end = start + win;

//   // ⛳︎ 여기 수정: 훅은 1번만 호출하고, 파라미터만 조건에 따라 설정
//   const appearInputRange: [number, number] =
//     i === 0 ? [0, 0.001] : [start, start + 0.06];
//   const appearOutputRange: [number, number] = i === 0 ? [1, 1] : [0, 1];

//   // 등장 시 0→1 (첫 스텝은 시작부터 1), 이후 값 유지
//   const appear = useTransform(
//     scrollYProgress,
//     appearInputRange,
//     appearOutputRange,
//     { clamp: true }
//   );

//   // 살짝 스케일 업
//   const raw = useTransform(scrollYProgress, [start, end], [0, 1], {
//     clamp: true,
//   });
//   const progress = useSpring(raw, { stiffness: 160, damping: 22 });
//   const scale = useTransform(progress, [0, 1], [0.985, 1]);

//   return (
//     <motion.div
//       style={{ opacity: appear, scale, zIndex: 10 + i }}
//       className="absolute inset-0 will-change-transform"
//     >
//       <div className="h-full flex items-center">{node}</div>
//     </motion.div>
//   );
// }

// export function KeyFeaturesSection() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const STEPS = [
//     {
//       lines: [
//         "매주 업데이트되는 법령 예규 판례",
//         "매주 추가되는 최신 세법자료를 바탕으로",
//         "언제나 최적의 답변을 제공합니다",
//       ] as const,
//       component: <TaxLawsMarquee />,
//       alt: "Intro1",
//     },
//     {
//       lines: [
//         "AI 인용 자료의 원문 제공",
//         "AI가 사용자의 질의와 관련한 법령 및 예규,",
//         "판례를 찾아서 제시해 줄 뿐만 아니라",
//         "해당 자료를 삼일아이닷컴과 연동하여 즉각적으로 확인할 수 있습니다.",
//       ] as const,
//       component: (
//         <PromptEnhancer
//           IMAGES={[
//             "/images/supportingdocs/grid2.svg",
//             "/images/supportingdocs/grid3.svg",
//             "/images/supportingdocs/grid4.svg",
//           ]}
//         />
//       ),
//       alt: "Intro2",
//     },
//     {
//       lines: [
//         "부족한 질문도 AI가 알아서 해결",
//         "AI가 질의내용을 분석하여 답변에 필요한 추가정보를 요청합니다",
//       ] as const,
//       component: (
//         <PromptEnhancer
//           IMAGES={[
//             "/images/supportingdocs/grid2.svg",
//             "/images/supportingdocs/grid3.svg",
//             "/images/supportingdocs/grid4.svg",
//           ]}
//         />
//       ),
//       alt: "Intro3",
//     },
//     {
//       lines: [
//         "모자란 정보는 AI가 알아서 웹 검색",
//         "AI가 질의내용을 분석하여 사전에 학습된 세법자료 외에",
//         "추가자료가 필요하다고 판단하는 경우 알아서 웹검색을 수행합니다",
//       ] as const,
//       component: (
//         <PromptEnhancer
//           IMAGES={[
//             "/images/supportingdocs/grid2.svg",
//             "/images/supportingdocs/grid3.svg",
//             "/images/supportingdocs/grid4.svg",
//           ]}
//         />
//       ),
//       alt: "Intro4",
//     },
//   ] as const;

//   // 타임라인 설정
//   const WIN = 0.18; // 각 스텝 표시 구간
//   const GAP = 0.06; // 스텝 전환 간격

//   // 배경색
//   const backgroundColor = useTransform(
//     scrollYProgress,
//     [0, 0.1, 1, 1],
//     ["#000000", "#000000", "#000000", "#ffffff"]
//   );

//   return (
//     <motion.section ref={ref} className="relative" style={{ backgroundColor }}>
//       <div className="h-[450vh]">
//         <div className="sticky top-0 h-svh md:h-screen">
//           <div className="mx-auto grid h-full max-w-[1400px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-14">
//             {/* ⬅️ 왼쪽 텍스트 스택 */}
//             <div className="relative">
//               {STEPS.map((step, i) => (
//                 <StepText
//                   key={`text-${i}`}
//                   i={i}
//                   lines={step.lines}
//                   scrollYProgress={scrollYProgress}
//                   win={WIN}
//                   gap={GAP}
//                 />
//               ))}
//             </div>

//             {/* ➡️ 오른쪽 비주얼 스택 (차곡차곡 쌓임) */}
//             <div className="relative w-full">
//               <div className="relative h-[68vh] w-full md:h-[84vh]">
//                 {STEPS.map((step, i) => (
//                   <StepVisual
//                     key={`vis-${i}`}
//                     i={i}
//                     node={step.component}
//                     scrollYProgress={scrollYProgress}
//                     win={WIN}
//                     gap={GAP}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }
