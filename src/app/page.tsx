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
      <section id="Intro">
        <IntroSection />
      </section>
      <section className="mt-60">
        <WhyChooseTax />
      </section>
      <section id="Features" className="mt-60">
        <KeyFeaturesSection />
      </section>

      <section id="Security" className="mt-60">
        <SecuritySection />
      </section>

      <section id="Pricing" className="mt-60 ">
        <PriceSection />
      </section>
    </div>
  );
}
