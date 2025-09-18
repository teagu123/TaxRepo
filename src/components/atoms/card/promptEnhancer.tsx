// PromptEnhancer.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function PromptEnhancer({ IMAGES }: { IMAGES: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!IMAGES?.length) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [IMAGES?.length]);

  if (!IMAGES?.length) return null;

  return (
    // ✅ 비율 박스: 부모 높이 없어도 자체적으로 공간을 만듭니다.
    <div className="relative w-full   aspect-[1/1] md:aspect-auto md:h-full">
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index >= i ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`grid img ${i + 1}`}
            fill
            priority={i === 0}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
