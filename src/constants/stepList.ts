export interface StepListType {
  id: number;
  title: string;
  subTitle: string;
}

export const STEPLIST = [
  {
    id: 1,
    title: "도입 문의",
    subTitle: "아래 이용 문의 버튼을 통해 도입 관련 정보를 남겨주세요.",
  },
  {
    id: 2,
    title: "전문가 상담 및 비용 안내",
    subTitle:
      "빠른 시일 내에 삼일 PwC 담당자가 연락을 드려 도입 절차를 상세히 설명드립니다.",
  },
  {
    id: 3,
    title: "계약 체결",
    subTitle: "현재 상황에 맞는 최적의 플랜으로 계약을 체결합니다.",
  },
  {
    id: 4,
    title: "서비스 이용 (구독형)",
    subTitle:
      "계약 완료 후, 회계 관련 질문에 대해 전문가 수준의 답변을 받아보는 경험을 시작하세요.",
  },
];
