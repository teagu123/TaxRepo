"use client";

import { IntroSection, SecuritySection } from "@/components/molecules/Landing";
import { IntroImageSection } from "@/components/molecules/Landing/introImageSection";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef(null);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <section id="service">
          <IntroSection />
        </section>
      </motion.div>

      <IntroImageSection />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <section id="Security">
          <SecuritySection />
        </section>
      </motion.div>
    </div>
  );
}
