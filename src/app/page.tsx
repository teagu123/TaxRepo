"use client";

import {
  IntroSection,
  KeyFeaturesSection,
  PriceSection,
  SecuritySection,
  WhyChooseTax,
} from "@/components/molecules/Landing";
import { Container } from "@/components/Template";

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
        <Container>
          <div className="text-[28px] font-medium">Key Feature</div>
        </Container>

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
