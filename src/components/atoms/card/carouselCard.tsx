"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

export function InfiniteMarqueeRow({
  items,
  direction = "left",
  speed = 90,
  gap = 16,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  gap?: number;
}) {
  const baseX = useMotionValue(0);
  const dir = direction === "right" ? 1 : -1;

  const trackRef = useRef<HTMLDivElement>(null);
  const [wrapRange, setWrapRange] = useState({ min: 0, max: 0 });

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    const half = trackRef.current.scrollWidth / 2;
    setWrapRange({ min: -half, max: 0 });
  }, [items, gap]);

  const x = useTransform(baseX, (v) => {
    const { min, max } = wrapRange;
    if (min === max) return 0;
    return wrap(min, max, v);
  });

  useAnimationFrame((_, delta) => {
    baseX.set(baseX.get() + dir * speed * (delta / 5000));
  });

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div ref={trackRef} style={{ x }} className="flex">
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="flex-shrink-0 whitespace-nowrap rounded-full border border-pwc-gray-400
                       bg-white/10 backdrop-blur-sm 
                       px-4 py-2 text-sm md:text-base text-pwc-white 
                       transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            style={{ marginRight: gap }}
            aria-hidden={i >= items.length}
          >
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** N개를 균등 분할 */
function splitIntoRows<T>(arr: T[], rows: number): T[][] {
  const out: T[][] = Array.from({ length: rows }, () => []);
  arr.forEach((v, i) => out[i % rows].push(v));
  return out;
}

/** 사용 섹션 */
export default function TaxLawsMarquee() {
  const laws = useMemo(
    () => [
      "법인세법",
      "조세특례제한법",
      "국세조세조정을위한법률",
      "국세기본법",
      "부가가치세법",
      "소득세법",
      "상속세및증여세법",
      "지방세법",
      "교육세법",
      "인지세법",
      "증권거래세법",
      "농어촌특별세법",
      "종합부동산세법",
      "개별소비세법",
      "OECD TP Guideline",
      "조세조약",
    ],
    []
  );

  const [row1, row2, row3] = splitIntoRows(laws, 3);

  return (
    <section className=" bg-[#303236] py-8 md:py-12 rounded-3xl  overflow-hidden shadow-[inset_60px_0_60px_-40px_rgba(100,100,100,0.25),inset_-60px_0_60px_-40px_rgba(100,100,100,0.25)]">
      {/* <div className="text-pwc-white text-center mb-10 text-[30px] font-medium">
        최신 법령 예규 판례 학습
      </div> */}
      <div className="mx-auto max-w-xl space-y-4 md:space-y-6 px-4">
        <InfiniteMarqueeRow items={row1} direction="left" speed={110} />
        <InfiniteMarqueeRow items={row2} direction="right" speed={110} />
        <InfiniteMarqueeRow items={row3} direction="left" speed={110} />
      </div>
    </section>
  );
}
