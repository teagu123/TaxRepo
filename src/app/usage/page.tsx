import StepBox from "@/components/atoms/box/stepBox";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import { STEPLIST } from "@/constants/stepList";

export default function UsagePage() {
  return (
    <div>
      <div className="bg-pink-100">
        <Container>
          <H1Txt classname="py-10 text-[30px]">
            Samil Accounting Insight 이용 안내
          </H1Txt>
        </Container>
      </div>
      <Container className="my-10 font-medium">
        <H1Txt classname="mb-5">
          SAI 이용 절차를 안내해 드리면 아래와 같습니다.
        </H1Txt>

        {STEPLIST.map((el, idx) => (
          <StepBox key={idx} data={el} />
        ))}

        <H1Txt classname="mt-20 mb-7 text-[30px]">
          (설치형) 사내 데이터를 활용한 AI 서비스 구축 프로세스
        </H1Txt>
        <div>
          업무 매뉴얼과 사내 정책서와 같은 내부 데이터를 기반으로 AI 시스템을
          설계하고 구축하는 전체 과정을 SAI 전담 컨설턴트가 도와드립니다. 이를
          통해 기업 맞춤형 AI 서비스를 효과적으로 도입할 수 있도록 지원합니다.
        </div>
        <div className="flex justify-center">
          <img
            src={"/images/on_premise.webp"}
            alt="onPremiseImage"
            className="object-contain rounded-xl "
          />
        </div>
      </Container>
    </div>
  );
}
