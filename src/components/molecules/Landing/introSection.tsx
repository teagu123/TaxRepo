import { Container } from "@/components/Template";
import OrangeButton from "@/components/atoms/button/orangeButton";
import { ArrowUp, Megaphone } from "lucide-react";
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
          <div className="text-lg md:text-xl text-[#222C40] leading-8  mt-30 text-center">
            <div className="font-semibold text-[30px] md:text-[36px] mt-10">
              삼일회계법인이 만든 세무 전문 AI Agent
            </div>
            <div className="mt-10">
              <div>
                <span className="relative text-pwc-orange-500 font-medium">
                  Tax Agent
                  <span className="absolute left-0 right-0 bottom-0.5 h-2.5 bg-pwc-orange-100 -z-10"></span>
                </span>
                는 삼일회계법인이 보유한 세법관련 Data를 기반으로
              </div>
              <div>최상의 자연어 검색 알고리즘을 탑재한 생성형 AI를 통해</div>
              <div className="mb-[24px]">
                자유롭게 질문하고 신속하게 전문적 답변을 제공받을 수 있습니다.
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex justify-center">
            <OrangeButton classname="font-medium mt-10 mb-16 text-[16px] md:text-[20px]  flex items-center gap-3 ">
              2주 무료 체험하기 <ArrowUp className="rotate-90" size={22} />
            </OrangeButton>
          </div>

          <div className="flex justify-center ">
            <div
              role="note"
              aria-label="출시 기념 이벤트 안내"
              className="
             bg-pwc-orange-50 text-base rounded-lg flex items-center justify-center mb-16 max-w-270 px-8 py-4 border-1 border-pwc-orange-300
            "
            >
              <Megaphone className="text-[#FF6000] mr-5" size={20} />

              <div className="text-pwc-orange-500 font-medium mr-2">
                출시 기념 무료체험 기간 연장 Event
              </div>
              <div className="font-light">
                <span className="text-[#52555D] font-bold">10월 </span> 중
                무료체험을 신청하시고
                <span className="text-[#52555D] font-bold"> 11월 15일</span>까지
                Tax Agent를 무료로 사용해 보세요!
              </div>
            </div>
          </div>

          <div className="w-full aspect-[1200/618]">
            <video
              src="/video/intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full rounded-xl border-2 border-pwc-gray-100 object-cover"
            />
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
