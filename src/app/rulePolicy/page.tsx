// src/app/privacy/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/Template";

export const metadata: Metadata = {
  title: "개인정보 처리방침",
  description: "삼일회계법인의 개인정보 처리방침 페이지입니다.",
};

export default function PrivacyPolicyPage() {
  const rows = [
    { vendor: "주식회사 더존비즈온", work: "세무 관련 프로그램 개발 및 유지" },
    { vendor: "주식회사 케이원익스프레스", work: "퀵서비스 업무 위탁" },
    { vendor: "주식회사 비즈니스온 커뮤니케이션", work: "세금계산서 발행" },
    { vendor: "(주)엠아이티마스", work: "IT서비스데스크 운영지원" },
    { vendor: "(주)퓨처아이넷", work: "서버 운영 지원" },
    { vendor: "아이에스티엔", work: "Java 개발" },
    { vendor: "코비전", work: "내부 포털 개발 및 유지보수" },
  ];

  const groups = [
    {
      recipients: ["PwC IT Services Limited", "PwC Network"],
      rows: [
        {
          label: "이전되는 개인정보 항목",
          content: (
            <div className="space-y-2">
              <div>
                <span className="mr-2">■</span>
                임직원의 성명, 생년월일, 이메일 주소, 자격사항, 병역사항,
                학력사항, 경력사항, 전화번호, 직급 (“임직원 정보”)
              </div>
              <div>
                <span className="mr-2">■</span>
                고객사가 제공한 Contact 정보 등
              </div>
            </div>
          ),
        },
        {
          label: "개인정보가 이전되는 국가",
          content: "영국, 싱가포르, PwC Network",
        },
        {
          label: "이전일시 및 이전방법",
          content: "수시, 해당 국가에 이전",
        },
        {
          label: "개인정보 이용목적",
          content:
            "효율적인 업무 수행, 고객 서비스 제공, 정보보안, IT 통합 등 운영 관리 등",
        },
        {
          label: "개인정보 보유·이용 기간",
          content:
            "정보 수집 목적이 달성될 때까지 또는 정보주체의 삭제요청시까지",
        },
      ],
    },
    {
      recipients: ["Google", "Microsoft", "Amazon Web Services"],
      rows: [
        {
          label: "이전되는 개인정보 항목",
          content: (
            <div className="space-y-2">
              <div>
                <span className="mr-2">■</span>임직원 정보, 고객사가 제공하는
                Contact 정보 등
              </div>
            </div>
          ),
        },
        {
          label: "개인정보가 이전되는 국가",
          content: "미국, 벨기에, 캐나다, 영국 등",
        },
        { label: "이전일시 및 이전방법", content: "수시, 해당 국가에 이전" },
        {
          label: "개인정보 이용목적",
          content: "효율적인 업무 수행, 고객 서비스 제공 등",
        },
        {
          label: "개인정보 보유·이용 기간",
          content:
            "정보 수집 목적이 달성될 때까지 또는 정보주체의 삭제요청시까지 등",
        },
      ],
    },
  ];

  return (
    <main id="top" className="bg-white text-[#222C40]">
      <Container>
        <div className="mx-auto w-full max-w-6xl py-10 md:py-14">
          {/* 헤더 */}
          <header className="mb-10">
            <h1 className="text-2xl md:text-3xl font-semibold">
              삼일회계법인 개인정보 처리방침
            </h1>
          </header>

          <div>
            {/* 목차 */}

            {/* 본문 */}
            <article className="prose max-w-none">
              {/* 개요 */}
              <section id="a0" className="scroll-mt-24">
                <p className="whitespace-pre-line">
                  삼일회계법인은 개인정보보호법 제30조 및 관계법령에 따라
                  정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                  원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                  처리방침을 수립·공개합니다.
                </p>
              </section>

              {/* 제1조 */}
              <section id="a1" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제1조(수집하는 개인정보의 항목)
                </h2>
                <p className="mt-3">① 수집하는 개인정보 항목</p>
                <p className="whitespace-pre-line mt-2">
                  1. 채용사이트를 통한 개인정보 수집의 경우 : 사진,
                  성명(한글/영문/한자), 생년월일/나이, 국적(내/외국인), 비자,
                  거주국, 전화번호(유/무선), 이메일, 주소(우편번호 포함),
                  보훈/장애 여부, 병역사항(군필여부, 출신, 복무기간),
                  가족사항(성명, 관계), 학력사항(고등학교 이상 학력, 학교명,
                  입학/졸업일, 전공, 성적), 자격사항(자격명, 취득일, 자격번호),
                  외국어성적(어학종류, 시험종류, 취득일, 점수/등급), 외국어
                  특기사항(외국어명, 사유/해외거주기간), 경력사항(직장명,
                  근무기간, 부서/직위, 담당업무), 해외연수/사회활동(종류,
                  활동기간, 국가/단체명, 내용) 등
                </p>
                <p className="whitespace-pre-line mt-2">
                  2.입사자 작성 및 제출 서류를 통한 수집의 경우 :
                  성명(한글/영문/한자), 주민등록번호(외국인등록번호), 성별,
                  국적, 외국인구분, 비자, 여권번호, 운전면허번호, 주소,
                  병역사항, 학력사항(대학 이상 학력, 학교명, 입학/졸업일, 전공),
                  경력사항(직장명, 근무기간, 부서/직위, 직전회사 징계 유무,
                  직전회사 연봉정보), 자격사항(자격명, 취득일, 자격번호),
                  외국어성적(어학종류, 시험종류, 취득일, 점수/등급),
                  장애/보훈사항 등
                </p>
                <p className="whitespace-pre-line mt-2">
                  3.삼일회계법인 사이트의 사이버 신고 페이지(내외부신고센터)를
                  통한 수집의 경우: 이름, 이메일, 연락처, 신고 사안 (익명 신고
                  시 이름, 이메일, 연락처 필수 아님)
                </p>
                <p className="whitespace-pre-line mt-2">
                  4.고객으로부터 위탁 받은 업무 수행의 경우: 해당 서비스에 대해
                  고객과 삼일회계법인 간에 승인된 계약서 또는 이에 준하는 법적
                  효력을 가진 문서에서 정의된 항목 또는 당해 업무 수행을 위해
                  필요한 항목
                </p>
                <p className="whitespace-pre-line mt-2">
                  5.뉴스레터 등 지식 정보 발송, 세미나 초청, 서비스 소개 및 고객
                  관리를 위한 개인정보 처리: 성명, 이메일 주소, 전화번호,
                  회사명, 부서명, 직위/직함 등 정보 주체가 제공한 Contact 정보
                </p>
              </section>

              {/* 제2조 */}
              <section id="a2" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제2조(개인정보의 이용목적)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지
                  않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에
                  따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <div className="mt-2">
                  <div>① 입사지원자에 대한 채용절차 관련 업무</div>
                  <div>
                    ② 신규 입사자에 대한 입사절차 진행 및 각종 관련 업무
                  </div>
                  <div>
                    ③ 임직원들의 인적 사항 관리, 사내네트워크, 복리후생프로그램
                    운영 및 대외활동에 관련된 행정지원 업무
                  </div>
                  <div>
                    ④ 공인회계사법상의 직무제한 확인 및 정보유출 리스크 관리
                    업무
                  </div>
                  <div>
                    ⑤ 고객으로부터 위탁 받은 업무수행 및 위탁된 업무수행에
                    수반하여 처리되는 경우
                  </div>
                  <div>⑥ 신고사안의 처리를 위한 업무</div>
                  <div>
                    ⑦ 뉴스레터 등 지식 정보 발송, 세미나 초청, 서비스 소개 및
                    고객 관리
                  </div>
                </div>
              </section>

              {/* 제3조 */}
              <section id="a3" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제3조(개인정보의 처리 및 보유기간)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  ① 삼일회계법인은 법령에 따른 개인정보 보유·이용기간 또는
                  정보주체로부터 개인정보를 수집시에 동의받은 개인정보
                  보유·이용기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <p className="mt-2">
                  ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                </p>
                <p className="whitespace-pre-line mt-2">
                  1. 입사지원자의 개인정보: 입사 전형 및 이의신청 절차 등이
                  종료되는 시점까지 보유합니다.
                </p>
                <p className="whitespace-pre-line mt-2">
                  2.실명 사이버 신고자의 개인정보: 신고한 사안에 대한 처리 완료
                  후 5년간 보유합니다(남녀고용평등과 일·가정 양립 지원에 관한
                  법률 제39조 제2항 제1의4호).
                </p>
                <p className="whitespace-pre-line mt-2">
                  3.임직원의 개인정보: 퇴직 후 10년까지 보유합니다. 다만
                  주민등록번호의 경우 국세기본법 제85조 제1항, 제2항에 따라
                  소득세의 법정신고기한이 지난 날부터 5년간 보유합니다.
                </p>
                <p className="whitespace-pre-line mt-2">
                  4.고객의 개인정보: 업무종료시로부터 10년간 보유합니다.
                </p>
                <p className="whitespace-pre-line mt-2">
                  5.뉴스레터 등 지식 정보 발송, 세미나 초청, 서비스 소개 및 고객
                  관리 : 각 수집 이용 목적 달성시 또는 정보주체가 동의를 철회할
                  때까지 보유합니다.
                </p>
              </section>

              {/* 제4조 */}
              <section id="a4" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제4조(개인정보의 제3자 제공)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  삼일회계법인은 정보주체의 개인정보를 제2조(개인정보의
                  이용목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                  법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에
                  해당하는 경우에만 개인정보를 제3자에게 제공합니다. 다만,
                  사전에 동의한 경우 및 기타 법에 의해 요구된다고 선의로
                  판단되는 경우 (예: 관련법령에 의거 적법한 절차에 의한
                  정부/수사기관의 요청이 있는 경우 등)은 예외로 합니다.
                </p>
              </section>

              {/* 제5조 */}
              <section id="a4" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제5조(개인정보처리의 위탁)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  ① 삼일회계법인은 수집된 개인정보를 “제2조”에서 고지한 범위
                  내에서 사용하며, 제3자에게는 원칙적으로 위탁하지 않습니다.
                  다만, 계약의 성실한 이행을 위하여 아래와 같이 개인정보를
                  위탁하고 있으며, 관계 법령에 따라 위탁 시 개인정보가 안전하게
                  관리될 수 있도록 필요한 사항을 철저히 준수하고 있습니다.
                </p>

                <div className="overflow-x-auto">
                  <table
                    className="w-full border-separate border-spacing-y-3"
                    aria-label="개인정보 처리 위탁 수탁자 목록"
                  >
                    <thead>
                      <tr className="text-left">
                        <th
                          scope="col"
                          className="px-4 py-3 text-sm font-semibold text-gray-800"
                        >
                          수탁자
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-sm font-semibold text-gray-800"
                        >
                          업무 내용
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i} className="bg-gray-100">
                          <td className="px-4 py-4 font-medium text-gray-900">
                            {r.vendor}
                          </td>
                          <td className="px-4 py-4 text-gray-900">{r.work}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 제5조의 1 */}
              <section id="a5_1" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제5조의 1 (개인정보처리의 위탁 중 국외 이전에 관한 사항)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  삼일회계법인은 효율적인 업무 수행을 위하여 아래와 같이 국외
                  법인에 개인정보의 처리를 위탁하고 있습니다. 개인정보의
                  국외이전을 거부하시려면 본 방침 제10조에 기재된 연락처로
                  연락주시기 바랍니다. 다만 국외이전을 거부하실 경우 서비스의
                  제공이 제한될 수 있습니다.
                </p>

                <div className="overflow-x-auto border-t border-gray-300">
                  <table
                    className="w-full text-[15px] md:text-base"
                    aria-label="국외 이전 관련 표"
                  >
                    {/* 헤더 */}
                    <thead>
                      <tr className="text-left border-b border-gray-300">
                        <th className="px-4 md:px-6 py-3 font-semibold text-gray-900">
                          개인정보를 이전받는 자
                        </th>
                        <th className="px-4 md:px-6 py-3 font-semibold text-gray-900">
                          구 분
                        </th>
                        <th className="px-4 md:px-6 py-3 font-semibold text-gray-900">
                          내 용
                        </th>
                      </tr>
                    </thead>

                    {/* 본문 */}
                    <tbody className="text-[13px]">
                      {groups.map((g, gi) => {
                        const rowSpan = g.rows.length;
                        return g.rows.map((r, ri) => (
                          <tr
                            key={`${gi}-${ri}`}
                            className={[
                              "align-top",
                              // 그룹 사이 가는 선 (첫 행 위에 선 추가)
                              ri === 0 ? "border-t border-gray-300" : "",
                              "border-b border-gray-200",
                            ].join(" ")}
                          >
                            {/* 왼쪽: 수탁자(그룹 첫 행에서만 출력, rowSpan으로 병합) */}
                            {ri === 0 && (
                              <td
                                rowSpan={rowSpan}
                                className="px-4 md:px-6 py-5 text-gray-900 font-semibold whitespace-pre-line"
                              >
                                {/* 수탁자 여러 줄 표시 */}
                                {g.recipients.map((v, i) => (
                                  <div key={i} className={i ? "mt-2" : ""}>
                                    {v}
                                  </div>
                                ))}
                              </td>
                            )}

                            {/* 가운데: 구분 */}
                            <td className="px-4 md:px-6 py-5 text-gray-800 whitespace-nowrap">
                              {r.label}
                            </td>

                            {/* 오른쪽: 내용 */}
                            <td className="px-4 md:px-6 py-5 text-gray-900">
                              {typeof r.content === "string" ? (
                                <div className="whitespace-pre-line">
                                  {r.content}
                                </div>
                              ) : (
                                r.content
                              )}
                            </td>
                          </tr>
                        ));
                      })}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 제5조의 2 (위탁 관련) */}
              <section id="a5_2" className="mt-6 scroll-mt-24">
                <p className="whitespace-pre-line">
                  ② 삼일회계법인은 위탁계약 체결시 개인정보 보호법 제26조에 따라
                  위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적
                  보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등
                  책임에 관한 사항을 계약서등 문서에 명시하고, 수탁자가
                  개인정보를 안전하게 처리하는지를 감독하고 있습니다.{" "}
                </p>

                <p className="mt-3">
                  ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본
                  개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                </p>
              </section>

              {/* 제6조 */}
              <section id="a6" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제6조(정보주체의 권리·의무 및 행사방법)
                </h2>

                {/* 서론 문장 */}
                <p className="mt-3">
                  ① 정보주체는 삼일회계법인에 대해 언제든지 다음 각 호의
                  개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>

                {/* 번호 목록 */}
                <ol className="mt-3 list-decimal pl-6 space-y-1">
                  <li>개인정보 열람요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제요구</li>
                  <li>처리정지 요구</li>
                </ol>

                {/* 후속 문단들 */}
                <p className="mt-3">
                  ② 제1항에 따른 권리 행사는 삼일회계법인에 대해 개인정보 처리
                  방법에 관한 고시 별지 제8호 및 제10호 서식에 따라 서면,
                  전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며
                  삼일회계법인은 이에 대해 조치하겠습니다.
                </p>

                <p className="mt-2">
                  ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한
                  경우에는 삼일회계법인은 정정 또는 삭제를 완료할 때까지 당해
                  개인정보를 이용하거나 제공하지 않습니다.
                </p>

                <p className="mt-2">
                  ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을
                  받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보
                  처리 방법에 관한 고시 별지 제11호 서식에 따른 위임장을
                  제출하여야 합니다.
                </p>
              </section>

              {/* 제7조 */}
              <section id="a7" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제7조(개인정보의 파기)
                </h2>
                <p className="mt-3">
                  ① 삼일회계법인은 개인정보 보유기간의 경과, 처리목적 달성 등
                  개인정보가 불필요하게 되었을 때에는 해당 개인정보를
                  파기합니다.
                </p>

                <p className="mt-2">
                  ② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나
                  처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
                  계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                  데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
                </p>

                <p className="mt-2">
                  ③ 삼일회계법인은 전자적 파일 형태로 기록ㆍ저장된 개인정보는
                  기록을 재생할 수 없도록 파기하며, 종이 문서에 기록ㆍ저장된
                  개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
                </p>
              </section>

              {/* 제8조 */}
              <section id="a8" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제8조(개인정보의 안전성 확보조치)
                </h2>
                <p className="mt-3">
                  삼일회계법인은 개인정보의 안전성 확보를 위해 다음과 같은
                  조치를 취하고 있습니다.
                </p>

                {/* 불릿 리스트 */}
                <ul className="mt-4 space-y-4 leading-7">
                  <li className="pl-6">
                    ■ 관리적 조치: 내부관리계획 수립ㆍ시행, 정기적 직원 교육 등
                  </li>
                  <li className="pl-6">
                    ■ 기술적 조치: 개인정보처리시스템 등의 접근권한 관리,
                    접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램
                    설치
                  </li>
                  <li className="pl-6"> ■ 물리적 조치: 전산실 등의 접근통제</li>
                </ul>
              </section>

              {/* 제9조 */}
              <section id="a9" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제9조(개인정보 자동 수집 장치의 설치/운영 및 거부에 관한 사항)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  삼일회계법인은 이용자의 정보를 수시로 저장하고 불러오는
                  ‘쿠키(cookie)’ 등을 운용하는 경우도 있습니다. 쿠키는
                  웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게
                  보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터에 저장되기도
                  합니다. 삼일회계법인 웹사이트 중 Google Analytics 기능의
                  활용이 있는 경우 Google 에서 쿠키 정보를 수집 처리 할 수
                  있습니다.
                </p>
                <div className="whitespace-pre-line mt-2">
                  <div>
                    <p>① 쿠키의 사용 목적</p>
                    <p>
                      쿠키는 이용자에게 최적화된 정보를 제공하기 위해
                      사용됩니다.
                    </p>
                  </div>

                  <div>
                    <p>② 쿠키의 설치/운영 및 거부</p>
                    <p>
                      이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                      따라서, 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든
                      쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나,
                      아니면 모든 쿠키의 저장을 거부할 수도 있습니다. (설정방법
                      : 웹 브라우저 상단의 도구 &gt 인터넷 옵션 &gt 개인정보)
                    </p>
                  </div>
                </div>
              </section>

              {/* 제10조 */}
              <section id="a10" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제10조(개인정보 보호책임자)
                </h2>
                <div className="whitespace-pre-line mt-3">
                  <p>
                    ① 삼일회계법인은 개인정보 처리에 관한 업무를 총괄해서
                    책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
                    피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를
                    지정하고 있습니다.
                  </p>
                  <p className="m-3">■ 개인정보보호책임자 : 정보보호위원장</p>
                  <p className="m-3">
                    ■ 개인정보보호 담당부서 : 정보보호위원회
                  </p>
                  <p className="m-3">
                    ■ 전화번호 02-3781-3111, 이메일 kr_privacy@pwc.com
                  </p>

                  <p>
                    ② 정보주체는 삼일회계법인의 서비스를 이용하면서 발생한 모든
                    개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
                    개인정보 보호책임자 및 개인정보 보호담당자로 문의하실 수
                    있습니다. 삼일회계법인은 정보주체의 문의에 대해 답변 및
                    처리해 드릴 것입니다.
                  </p>
                </div>
              </section>

              {/* 제11조 */}
              <section id="a11" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제11조(권익침해 구제방법)
                </h2>
                <div className="whitespace-pre-line mt-3">
                  <p>
                    ① 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                    개인정보분쟁조정위원회, 한국인터넷진흥원
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                    있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                    아래의 기관에 문의하시기 바랍니다.
                  </p>
                  <p className="m-3">
                    1.개인정보분쟁조정위원회: (국번없이) 1833-6972
                    <a href="https://www.kopico.go.kr/main/main.do">
                      (www.kopico.go.kr)
                    </a>
                  </p>
                  <p className="m-3">
                    2.개인정보침해신고센터: (국번없이) 118
                    <a href="https://privacy.kisa.or.kr/main.do">
                      (privacy.kisa.or.kr)
                    </a>
                  </p>
                  <p className="m-3">
                    3.대검찰청: (국번없이) 1301
                    <a href="https://www.spo.go.kr/site/spo/main.do">
                      (www.spo.go.kr)
                    </a>
                  </p>
                  <p className="m-3">
                    4.경찰청: (국번없이) 182
                    <a href="https://ecrm.police.go.kr/minwon/main">
                      (ecrm.cyber.go.kr)
                    </a>
                  </p>
                  <p className="m-3">
                    ②「개인정보 보호법」 제35조(개인정보의 열람),
                    제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지
                    등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분
                    또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
                    행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                  </p>
                  <p className="m-3">
                    ■ 중앙행정심판위원회: (국번없이) 110
                    <a href="https://simpan.go.kr/com/zz/999/main.do;jsessionid=qjG36J76F78HtH1t9_EumRISe7P4Y_4vNtS_Dzdo.oaseje_eas_ct02?cmnMenuCd=ma">
                      (www.simpan.go.kr)
                    </a>
                  </p>
                </div>
              </section>

              {/* 제12조 */}
              <section id="a12" className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-semibold">
                  제12조(개인정보 처리방침 변경)
                </h2>
                <p className="whitespace-pre-line mt-3">
                  ① 이 개인정보 처리방침은 2025년 2월 7일 최종 변경되었습니다. ②
                  개인정보 처리방침에 변경이 있는 경우에는 홈페이지를 통해
                  고지되며, 기존 개인정보 처리방침은 하기 링크를 통해 확인할 수
                  있습니다.
                </p>
              </section>

              {/* 맨 위로 */}
              <div className="mt-12">
                <a href="#top" className="text-sm text-[#222C40] underline">
                  맨 위로
                </a>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </main>
  );
}
