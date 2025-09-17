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
    <div className="relative w-full h-full">
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
            width={1400}
            height={1400}
            priority={i === 0}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
