import { Container } from "@/components/Template";
import OrangeButton from "@/components/atoms/button/orangeButton";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
      }}
    >
      <div>
        <Container>
          <div className="text-xl text-[#222C40] leading-8  mt-10 ">
            <div className="font-semibold text-[35px] mt-10">
              삼일회계법인이 만든 세무 전문 AI Agent
            </div>
            <div className="mt-10">
              <div>
                삼일회계법인이 직접 선별한
                <span className="relative">
                  세무 데이터
                  <span className="absolute left-0 right-0 bottom-0.5 h-2.5 bg-pwc-orange-100 -z-10"></span>
                </span>
                와
              </div>
              <div className="mb-[24px]">
                <span className="relative">
                  자체 개발 검색 알고리즘
                  <span className="absolute left-0 right-0 bottom-0.5 h-2.5 bg-pwc-orange-100 -z-10"></span>
                </span>
                으로 구현한 AI 솔루션을 경험해보세요.
              </div>
            </div>
            <div>
              <div>
                <span className="font-semibold">
                  Hugging Face MTEB 리더보드 1위
                </span>
                를 기록한 검증된 기술로
              </div>
              <div>한 단계 더 업그레이드된 답변을 제공합니다</div>
            </div>
          </div>
          <div className="flex">
            <OrangeButton classname="font-semibold my-15 flex items-center gap-3">
              무료 체험하기 <ArrowUp className="rotate-90" size={18} />
            </OrangeButton>
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
