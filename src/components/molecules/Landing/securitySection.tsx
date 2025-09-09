import SecurityBox from "@/components/atoms/box/securityBox";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import {
  SECURITYBOXLIST,
  SecurityBoxListType,
} from "@/constants/securityBoxList";

export function SecuritySection() {
  return (
    <div className="py-20">
      <Container>
        <H1Txt classname="text-[25px] sm:text-[28px] lg:text-[32px] mb-8">
          삼일 PWC의 보안 시스템 내에서 안전하게 이용
        </H1Txt>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {SECURITYBOXLIST.map((el: SecurityBoxListType, idx: number) => (
            <SecurityBox data={el} key={idx} />
          ))}
        </div>
      </Container>
    </div>
  );
}
