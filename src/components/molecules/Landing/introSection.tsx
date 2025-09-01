import Banner from "@/components/atoms/banner/banner";
import { Container } from "@/components/Template";
import { FNSAMPLELIST } from "@/constants/functionIntroSampleList";
import FunctionIntro from "../FunctionIntro/functionIntro";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { QUESTIONLIST, QuestionListType } from "@/constants/questionList";
import OrangeButton from "@/components/atoms/button/orangeButton";
import QnABox from "../QnABox/qnaBox";
import {
  SECURITYBOXLIST,
  SecurityBoxListType,
} from "@/constants/securityBoxList";
import SecurityBox from "@/components/atoms/box/securityBox";

export function IntroSection() {
  const selectQuestion = "일반 질의";
  return (
    <div>
      {/* part 1 -  Image */}
      {/* <Banner /> */}

      <Container>
        <div className="text-4xl font-bold leading-15 min-h-[70vh] flex items-center animate-slideInFromRight-1200">
          <div>
            <div>삼일회계법인이 직접 선별한 세무 데이터와</div>
            <div className="mb-3">
              자체 개발 검색 알고리즘으로 구현한 AI 솔루션을 경험해보세요.
            </div>
            <div className="text-xl text-pwc-orange-300 mt-10 animate-slideInFromRight-1500">
              <div>Hugging Face MTEB 리더보드 1위를 기록한 검증된 기술로</div>
              <div>한 단계 더 업그레이드된 답변을 제공합니다</div>
            </div>
          </div>
        </div>
      </Container>

      {/* part 2 */}
      <div className="bg-[#ffebdc] ">
        <Container>
          {/* 텍스트 반응형 */}
          <div className="font-bold flex flex-col gap-2 pt-15 lg:text-2xl text-md sm:text-lg ">
            <div>Samil Accounting Insight는</div>
            <div>
              K-IFRS 기준서에 따라 회계 처리, 기준서 해석 등 다양한 질의에 대해
            </div>
            <div>전문적인 답변을 제공하는 생성형 AI입니다.</div>
          </div>

          {/* 이미지 반응형 */}
          <div className="px-6 sm:px-10 lg:px-20 py-10 flex items-center justify-center ">
            <img
              src="/images/sample.webp"
              alt="설명 텍스트 "
              className="object-contain rounded-xl w-full max-w-xl"
            />
          </div>
        </Container>
      </div>

      {/* part 3 */}
      <Container>
        {FNSAMPLELIST.map((el, idx) => (
          <FunctionIntro key={idx} data={el} />
        ))}

        <div>
          {/* 제목들 반응형 폰트 크기 조절 */}
          <H1Txt classname="my-7 lg:text-[30px] text-[20px] sm:text-[24px]">
            상용 LLM 으로 다양한 질의 처리 지원
          </H1Txt>
          <H1Txt classname="text-[18px] mb-12 sm:text-[20px]">
            SAI는 보안이 강화된 PwC 전용 ChatGPT를 기본 LLM으로 사용합니다.
            따라서 기준서 관련 질의뿐만 아니라 일반적인 질의에 대해서도 활용
            가능합니다.
          </H1Txt>

          {/* 버튼 그리드 반응형: 모바일 1~2열, 태블릿 3열, 데스크탑 4열 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {QUESTIONLIST.map((el: QuestionListType, idx: number) => (
              <OrangeButton
                key={idx}
                classname="rounded-[15px]"
                isDisable={el.title !== selectQuestion}
              >
                <div className="text-center py-2">
                  <div className="mb-1 text-xl font-bold">{el.title}</div>
                  <div className="text-[14px]">{el.subTitle}</div>
                </div>
              </OrangeButton>
            ))}
          </div>

          <QnABox />
        </div>
      </Container>

      <div className="bg-[#FFCDA8] py-20">
        <Container>
          {/* 제목 반응형 */}
          <H1Txt classname="text-[25px] sm:text-[28px] lg:text-[32px] mb-8">
            삼일 PwC의 보안 시스템 내에서 안전하게 이용
          </H1Txt>

          {/* 보안 박스 그리드 반응형 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {SECURITYBOXLIST.map((el: SecurityBoxListType, idx: number) => (
              <SecurityBox data={el} key={idx} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
