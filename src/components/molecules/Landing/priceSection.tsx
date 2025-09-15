import { PriceCard } from "@/components/atoms/card/priceCard";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import { PRICE_LIST } from "@/constants/priceList";
import { motion } from "framer-motion";

export function PriceSection() {
  return (
    <div className="py-20 bg-pwc-orange-100">
      <Container>
        <H1Txt classname="text-[25px] sm:text-[28px] lg:text-[32px] mb-8">
          요금 안내
        </H1Txt>

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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PRICE_LIST.map((p) => (
              <PriceCard key={p.name} plan={p} />
            ))}
          </div>
        </motion.div>

        <div className=" text-center text-[#8B91A0] my-10 flex flex-col gap-3 text-[13px] md:text-[16px]">
          <div>
            계약기간 중 크레딧 충전이 필요한 경우 100 크레딧 단위로 충전할 수
            있고, 100 크레딧 당 가격은 150,000원입니다.
          </div>
          <div>
            충전된 크레딧은 질의내용을 분석하고 답변을 산출하는 과정에서
            사용되는 AI 모델별 토큰 사용량에 따라 차감됩니다.
          </div>
          <div>
            질의내용에 따른 편차가 존재하나, 평균적으로 1 Credit 당 0.5 ~
            1.5개의 질의답변이 가능합니다.
          </div>
        </div>
      </Container>
    </div>
  );
}
