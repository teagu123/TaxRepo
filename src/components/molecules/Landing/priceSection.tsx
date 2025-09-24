import { PriceCard } from "@/components/atoms/card/priceCard";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import { PRICE_LIST } from "@/constants/priceList";
import { motion } from "framer-motion";

export function PriceSection() {
  return (
    <div className=" bg-pwc-orange-100 py-20">
      <Container>
        <H1Txt classname="text-[28px] sm:text-[32px] lg:text-[36px] mb-6">
          요금 안내 (법인 고객용)
        </H1Txt>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeIn",
            duration: 0.5,
            x: { duration: 0.5 },
          }}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {PRICE_LIST.map((p) => (
              <PriceCard key={p.name} plan={p} />
            ))}
          </div>

          <div className="my-8 text-center text-pwc-gray-500 text-sm">
            * 안내된 모든 금액은 VAT 미포함 금액입니다.
          </div>

          <div className=" bg-pwc-gray-50 p-4 md:p-5 rounded-lg text-sm md:text-[15px] flex flex-col gap-4 md:gap-3">
            {/* ITEM 1 */}
            <div className="border-b border-pwc-gray-200 pb-4 md:pb-3 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0">
              <div className="font-bold md:mr-3 md:col-span-4">
                Q. 계약기간 중 크레딧을 모두 소진하면 충전할 수 있나요?
              </div>
              <div className="md:col-span-8">
                A. 계약기간 중 크레딧 충전이 필요한 경우 100 크레딧 단위로
                충전할 수 있고, 100 크레딧 당 가격은 150,000원입니다.
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0">
              <div className="font-bold md:mr-3 md:col-span-4">
                Q. 충전된 크레딧은 어떻게 사용되나요?
              </div>
              <div className="md:col-span-8">
                <div>
                  A. 충전된 크레딧은 질의내용을 분석하고 답변을 산출하는
                  과정에서 사용되는 AI 모델별 토큰 사용량에 따라 차감됩니다.
                </div>
                <div className="text-xs md:text-[14px] md:ml-4 text-pwc-black/50 mt-1">
                  (질의내용에 따른 편차가 존재하나, 평균적으로 1 크레딧은 당 0.5
                  ~ 1.5개의 질의답변이 가능합니다.)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
