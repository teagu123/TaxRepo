import AnswerBox from "@/components/atoms/box/answerBox";
import QuestionBox from "@/components/atoms/box/questionBox";

export default function QnABox() {
  return (
    <div className="w-full  flex justify-center mb-20">
      <div className="md:w-[80%] w-full">
        <QuestionBox text="1101호 기준서 8번 단락 보여줘" />
        <AnswerBox>
          {
            <div>
              회사가 영업권을 현금창출단위 A에 귀속시켜 손상검사를 수행하였으나
              당기 중 현금창출단위 A의 일부 영업을 처분한 경우, 처분된 영업과
              관련된 영업권의 일부를 제거해야 합니다. 기준서 제1036호 문단 86에
              따르면, 영업권을 배분한 현금창출단위 내의 영업을 처분할 때,
              처분되는 영업과 관련된 영업권은 처분손익을 산정할 때 그 영업의
              장부금액에 <span className="bg-orange-200">포함</span>해야 하며,
              더 합리적인 기준이 없는 한 현금창출단위 내 존속하는 부분과
              처분되는 부분의 상대적인 가치를 기준으로 측정해야 합니다.
            </div>
          }
        </AnswerBox>
      </div>
    </div>
  );
}
