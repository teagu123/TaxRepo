import OrangeButton from "@/components/atoms/button/orangeButton";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import Image from "next/image";

export default function PricePage() {
  return (
    <div>
      <div className="bg-pink-100">
        <Container>
          <H1Txt classname="py-10 text-[30px]">
            Samil Accounting Insight 요금 안내
          </H1Txt>
        </Container>
      </div>
      <div className="flex justify-center">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[90%] my-20 ">
          <div className="bg-linear-to-r/srgb from-orange-300 to-orange-600">
            <div className="bg-white m-2 flex flex-col items-center gap-5">
              <div className="mt-10 font-bold text-[30px]">구독형</div>

              <Image
                src={"/images/priceEx.png"}
                alt="구독 이미지"
                width={160}
                height={160}
              />
              <div className="text-[25px] font-bold">
                <div className="text-gray-400">계정당</div>
                <div>
                  99,990원 <span className="text-[18px]">/ 월</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[18px] pb-10 px-5 md:px-0">
                <div className="mb-1">
                  구독형 서비스에서 제공되는 기능은 다음과 같습니다.
                </div>
                <div>✓ 회계 도메인에 특화된 답변 제공</div>
                <div>✓ 넉넉한 채팅 사용량 제공</div>
              </div>
            </div>
          </div>
          <div className="shadow-lg">
            <div className="bg-white m-2 flex flex-col items-center gap-5">
              <div className="mt-5 font-bold text-[30px]">설치형</div>

              <Image
                src={"/images/price2Ex.png"}
                alt="구독 이미지"
                width={160}
                height={160}
              />
              <div className="text-[25px] font-bold"></div>
              <div className="text-gray-400"></div>
              <div className="flex flex-col gap-2 text-[18px] pb-5 px-5 md:px-0">
                <div className="mb-1">
                  구독형 서비스에서 제공되는 기능은 다음과 같습니다.
                </div>

                <div>✓ 도입 문의를 통해 상세 내용 협의</div>
                <div className="flex justify-center mt-5">
                  <div
                    className={`bg-gray-700 px-3 py-1.5 rounded-[5px] text-white cursor-pointer`}
                  >
                    도입 문의
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
