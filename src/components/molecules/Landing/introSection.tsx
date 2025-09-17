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
                <span className="relative text-pwc-orange-500">
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
            <OrangeButton classname="font-medium my-10 text-[16px] md:text-[20px]  flex items-center gap-3 ">
              2주 무료 체험하기 <ArrowUp className="rotate-90" size={22} />
            </OrangeButton>
          </div>

          <div className="flex justify-center ">
            <div
              role="note"
              aria-label="출시 기념 이벤트 안내"
              className="
             bg-pwc-orange-100 rounded-2xl flex p-3 items-center gap-5 justify-center mb-10 max-w-270 px-10 shadow-md
            "
            >
              <div className="mt-0.5  rounded-full bg-white/60">
                <Megaphone className="text-[#FF6000]" size={20} />
              </div>
              <p className="text-[14px] md:text-[16px]  text-[#3A2A1B] font-medium ">
                출시 기념 무료체험 기간 연장 Event : 10월 중 무료체험을
                신청하시고 11월 15일까지 Tax Agent를 무료로 사용해 보세요!
              </p>
            </div>
          </div>

          <video
            src="/video/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full rounded-xl border-2 border-pwc-gray-100"
          />
        </Container>
      </div>
    </motion.div>
  );
}
