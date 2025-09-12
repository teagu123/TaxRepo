"use client";

import {
  IntroSection,
  KeyFeaturesSection,
  PriceSection,
  SecuritySection,
  WhyChooseTax,
} from "@/components/molecules/Landing";

export default function Home() {
  return (
    <div>
      {/* Intro 파트(?) */}
      <section id="service">
        <IntroSection />
      </section>
      <section id="docs" className="mt-60">
        <WhyChooseTax />
      </section>
      <section id="docs" className="mt-60">
        <KeyFeaturesSection />
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
