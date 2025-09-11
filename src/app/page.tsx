"use client";

import {
  IntroImageSection,
  IntroSection,
  PriceSection,
  SecuritySection,
  SupportingDocs,
} from "@/components/molecules/Landing";

export default function Home() {
  return (
    <div>
      {/* Intro 파트(?) */}
      <section id="service">
        <IntroSection />
        <IntroImageSection />
      </section>

      <section id="docs">
        <SupportingDocs />
      </section>

      <section id="Security">
        <SecuritySection />
      </section>

      <section id="price">
        <PriceSection />
      </section>
    </div>
  );
}
