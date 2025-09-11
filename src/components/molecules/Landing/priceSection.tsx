import { PriceBespokeCard } from "@/components/atoms/card/priceBespokeCard";
import { PriceCard } from "@/components/atoms/card/priceCard";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import { PRICE_LIST } from "@/constants/priceList";
import { motion } from "framer-motion";

export function PriceSection() {
  return (
    <div className="py-20">
      <Container>
        <H1Txt classname="text-[25px] sm:text-[28px] lg:text-[32px] mb-8">
          요금 안내
        </H1Txt>

        <div className="mb-8 rounded-xl  px-5 py-4 text-sm leading-6 text-[color:var(--color-pwc-text-grey)]">
          <p>Tax Agent를 사용하기 위해서는 Credit이 필요합니다.​</p>
          <p className="mt-2">
            법인별로 이용패턴에 맞는 요금제를 선택하시고 법인 내에서 사용자 수
            제한없이 자유롭게 사용하세요​
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeIn",
            duration: 1.3,
            x: { duration: 1 },
          }}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PRICE_LIST.map((p) => (
              <PriceCard key={p.name} plan={p} />
            ))}
          </div>
          <PriceBespokeCard />
        </motion.div>
      </Container>
    </div>
  );
}
