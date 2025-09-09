"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function IntroImageSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["#ffffff", "#000000", "#000000", "#ffffff"]
  );

  const firstOpacity = useTransform(scrollYProgress, [0, 0.03, 1], [1, 1, 1]);
  const secondOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative h-[300vh]"
      style={{ backgroundColor }}
    >
      <div className="sticky top-10 h-screen flex items-center justify-center">
        <motion.div style={{ opacity: firstOpacity }} className="absolute z-10">
          <Image
            src="/images/intro1.svg"
            alt="Intro1"
            width={1100}
            height={800}
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity: secondOpacity }}
          className="absolute z-20"
        >
          <Image
            src="/images/intro2.svg"
            alt="Intro2"
            width={1100}
            height={800}
            className="object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
