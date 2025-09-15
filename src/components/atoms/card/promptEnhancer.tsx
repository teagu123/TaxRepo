"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function PromptEnhancer({ IMAGES }: { IMAGES: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative  w-full h-full  ">
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: index >= i ? 1 : 0 }} // 현재 index 이상이면 보이게
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={src}
            alt={`grid img ${i}`}
            width={1400}
            height={1400}
            priority={i === 0}
            className="absolute"
          />
        </motion.div>
      ))}
    </div>
  );
}
